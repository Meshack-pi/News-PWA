import './news-article.js';
import { topHeadlinesUrl } from './newsApi.js';
import { applenews } from './newsApi.js';
import { business } from './newsApi.js'

window.addEventListener('load', () => {
  getNews();
  registerSW();
});

async function getNews() {
  const trending = await fetch(topHeadlinesUrl);
  const trendingj = await trending.json();
  const apple = await fetch(applenews);
  const applej = await apple.json();
  const businessNews = await fetch(business);
  const businessNewsj = await businessNews.json();
  
  const main = document.querySelector('main');
  
  businessNewsj.articles.forEach(article =>{
          const el3 = document.createElement('news-article');
          el3.article = article;
          main.appendChild(el3);
  });
  
  applej.articles.forEach(article =>{
        const el2 = document.createElement('news-article');
        el2.article = article;
        main.appendChild(el2);
  });
  

  trendingj.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
