const apiKey = '774e253815c24dbc816d4db1feab29d2';
const topHeadlinesUrl =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
const applenews = 'https://newsapi.org/v2/everything?q=apple&from=2022-01-12&to=2022-01-12&sortBy=popularity&apiKey=' + apiKey;
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + apiKey;

export { apiKey, topHeadlinesUrl, applenews, business };
