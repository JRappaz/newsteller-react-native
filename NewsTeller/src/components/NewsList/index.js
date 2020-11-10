import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import { styles } from "./style";
import { Colors } from "@styles";
import {
  fetchArticlesWithOptions,
  fetchArticlesFromCategory,
} from "@helpers/APIConnect";

import NewsCard from "@components/NewsCard";
import SearchBox from "@components/SearchBox";

import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

/**
 * Display a list of articles in NewsCard fetched from APIConnect
 *    category - set the category of the NewsList
 *    isWithSearch - if true allow user to do search from a text input
 */
export default NewsList = ({ navigation, category, isWithSearch = false }) => {
  const [resetCount, setResetCount] = useState(0);

  const [isLoading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);

  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    if (shouldFetch) {
      fetchNextPage();
    }
  }, [shouldFetch, resetCount]);

  const setOptionsAndInitFetch = (options) => {
    setPage(1);
    setResetCount(resetCount + 1);
    setSearchOptions(options);
    setShouldFetch(true);
  };

  const fetchNextPage = () => {
    setShouldFetch(false);
    isWithSearch
      ? fetchArticlesWithOptions(setLoading, setArticles, {
          ...searchOptions,
          ...{ current: page },
        })
      : fetchArticlesFromCategory(setLoading, setArticles, category, page);
    setPage(page + 1);
  };

  const _keyExtractor = (item, index) =>
    "r-" + resetCount + "-list-item-" + index;

  return (
    <View style={styles.container}>
      {isLoading && articles.length == 0 ? (
        <ActivityIndicator size="small" color={Colors.activityIndicator} />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={styles.container}>
              {isWithSearch ? (
                <SearchBox setAndFetch={setOptionsAndInitFetch} />
              ) : (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{category}</Text>
                </View>
              )}
            </View>
          }
          style={styles.list}
          data={articles}
          keyExtractor={_keyExtractor}
          numColumns={1}
          onEndReachedThreshold={0.8}
          onEndReached={fetchMore}
          renderItem={({ item }) => (
            <NewsCard navigation={navigation} newsItem={item} />
          )}
        />
      )}
    </View>
  );
};
