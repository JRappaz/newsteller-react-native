/* ============================= APIConnect interface ============================= */

// Global fetching article method, uncomment to choose the source
export const fetchNewsApi = (setLoading, setArticles, searchTerm) => {
  //fetchNewsLocalServer(setLoading, setArticles, searchTerm);
  //fetchApiNewsTeller(setLoading, setArticles, searchTerm);
  loadArticles(setLoading, setArticles, searchTerm);
};

// Global fetching categories method, uncomment to choose the source
export const fetchCategoriesApi = (setLoading, setCategories) => {
  //fetchCategoriesLocalServer(setLoading, setCategories);
  loadCategories(setLoading, setCategories);
};

/* ============================= News-Teller API ============================= */

// Fetch News-Teller API for artticles: only word researcch implemented
const fetchApiNewsTeller = async (setLoading, setArticles, searchTerm) => {
  setLoading(true);

  const data = {
    aggregations: 'articles_over_time',
    current: 1,
    filters: [],
    resultsPerPage: 10,
    searchTerm: searchTerm,
    sortDirection: 'desc',
    sortField: 'date',
  };

  const url = 'https://newsteller.io/api/v1/article/search/';

  const string = JSON.stringify(data);

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: string,
  })
    .then((response) => response.json())
    .then((json) => json.data.hits)
    .then((data) => {
      setArticles(data);
      setLoading(false);
    });
};

/* ============================= Local Json server ============================= */

// Fetch local json server for articles
const fetchNewsLocalServer = async (setLoading, setArticles, searchTerm) => {
  setLoading(true);
  if (searchTerm == '') {
    searchTerm = 'sport';
  }

  // Local address when emulating the app on android and hosting server on localhost port 3002
  fetch('http://10.0.2.2:3002/response')
    .then((response) => response.json())
    .then((json) => {
      setArticles(processArticles(json[searchTerm].hits));
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Fetch local json server for categories
const fetchCategoriesLocalServer = async (setLoading, setCategories) => {
  // Local address when emulating the app on android and hosting server on localhost port 3002
  setLoading(true);
  fetch('http://10.0.2.2:3002/response')
    .then((response) => response.json())
    .then((json) => {
      const keys = Object.keys(json);
      setCategories(keys);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });
};

/* ============================= Local File ============================= */

// Load articles from local file
const loadArticles = (setLoading, setArticles, searchTerm) => {
  setLoading(true);
  if (searchTerm == '') {
    searchTerm = 'sport';
  }
  const data = require('@data/categories.json');
  setArticles(processArticles(data.response[searchTerm].hits));
  setLoading(false);
};

// Load categories local from file
const loadCategories = (setLoading, setCategories) => {
  setLoading(true);
  const data = require('@data/categories.json');
  const keys = Object.keys(data.response);
  setCategories(keys);
  setLoading(false);
};

/* ============================= Helpers Data Processing ============================= */

// For local data, add missing fields to articles
const processArticles = (json) => {
  var tab = json;
  for (var i = 0; i < tab.length; ++i) {
    tab[i].favorite_count = 0;
    tab[i].quote_count = 0;
    tab[i].reply_count = 0;
    tab[i].retweet_count = 0;
    tab[i].publish_datetime = new Date().getTime();
  }
  return tab;
};
