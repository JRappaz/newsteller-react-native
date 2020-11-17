/* ============================= APIConnect interface ============================= */

export const DEFAULT_SEARCH_OPTIONS = {
  aggregations: "articles_over_time",
  current: 1,
  filters: [],
  resultsPerPage: 10,
  searchTerm: "",
  sortDirection: "desc",
  sortField: "date",
};

// Global fetching article method, uncomment to choose the source
export const fetchArticlesWithOptions = (
  setLoading,
  setArticles,
  setSources,
  setDocCountOverTime,
  options
) => {
  fetchApiNewsTeller(
    setLoading,
    setArticles,
    setSources,
    setDocCountOverTime,
    options
  );
};

// Global fetching article method, uncomment to choose the source
export const fetchArticlesFromCategory = (
  setLoading,
  setArticles,
  category,
  pageToken
) => {
  //fetchNewsLocalServer(setLoading, setArticles, searchTerm);
  //fetchApiNewsTeller(setLoading, setArticles, searchTerm);
  loadArticles(setLoading, setArticles, category);
};

// Global fetching categories method, uncomment to choose the source
export const fetchCategoriesApi = (setLoading, setCategories) => {
  //fetchCategoriesLocalServer(setLoading, setCategories);
  loadCategories(setLoading, setCategories);
};

/* ============================= News-Teller API ============================= */

// Fetch News-Teller API for articles
const fetchApiNewsTeller = async (
  setLoading,
  setArticles,
  setSources,
  setDocCountOverTime,
  options
) => {
  setLoading(true);

  const url = "https://newsteller.io/api/v1/articles/search/";

  const string = JSON.stringify(options);

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: string,
  })
    .then((response) => response.json())
    .then((json) => json.data)
    .then((data) => {
      const articles = data.hits;
      const sources = data.aggregations.handle.buckets.map((obj) => obj.key);
      const docOverTime = processArticleOverTime(
        data.aggregations.articles_over_time.buckets
      );

      options.current == 1
        ? setArticles(articles)
        : setArticles((prevArticles) => [...prevArticles, ...articles]);
      setSources(sources);
      setDocCountOverTime(docOverTime);
      setLoading(false);
    });
};

const processArticleOverTime = (buckets) => {
  return buckets.map((b) => {
    let newObj = { value: b.key, count: b.doc_count };
    return newObj;
  });
};

/* ============================= Local Json server ============================= */

// Fetch local json server for articles in a certain category
const fetchNewsLocalServer = async (setLoading, setArticles, category) => {
  setLoading(true);
  if (category == "") {
    category = "sport";
  }

  // Local address when emulating the app on android and hosting server on localhost port 3002
  fetch("http://10.0.2.2:3002/response")
    .then((response) => response.json())
    .then((json) => {
      setArticles(processArticles(json[category].hits));
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
  fetch("http://10.0.2.2:3002/response")
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

// Load articles of a category from local file
const loadArticles = (setLoading, setArticles, category) => {
  setLoading(true);
  if (category == "") {
    category = "sport";
  }
  var data = require("@data/categories.json");
  data = processArticles(data.response[category].hits);
  setArticles((articles) => [...articles, ...data]);
  setLoading(false);
};

// Load categories local from file
const loadCategories = (setLoading, setCategories) => {
  setLoading(true);
  const data = require("@data/categories.json");
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
