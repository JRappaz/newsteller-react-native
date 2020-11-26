import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, ActivityIndicator, Text, Switch } from "react-native";
import { styles } from "./style";
import { Colors } from "@styles";
import { fetchArticlesWithOptions } from "@helpers/APIConnect";

import NewsCard from "@components/NewsCard";
import SearchBox from "@components/SearchBox";
import SparkLine from "@components/SparkLine";
import SwitchButton from "@components/SwitchButton";

import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

/**
 * Display a list of articles in NewsCard fetched from APIConnect
 *    category - set the category of the NewsList
 *    isWithSearch - if true allow user to do search from a text input
 */
export default NewsList = ({ navigation, category, isWithSearch = false }) => {
  // Data
  const [sources, setSources] = useState([]);
  const [docCountOverTime, setDocCountOverTime] = useState([]);
  const [articles, setArticles] = useState([]);

  // Fetching logic
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);
  const [page, setPage] = useState(1);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    if (shouldFetch) {
      fetchNextPage();
    }
  }, [shouldFetch]);

  const setOptionsAndInitFetch = (options) => {
    setPage(1);
    setSearchOptions(options);
    setShouldFetch(true);
  };

  const fetchNextPage = () => {
    setShouldFetch(false);

    const finalOptions = {
      ...searchOptions,
      ...{ current: page },
    };

    if (!isWithSearch) {
      const filters = [];
      filters.push({ field: "tags", values: [category], type: "all" });
      finalOptions["filters"] = filters;
    }

    fetchArticlesWithOptions(
      setLoading,
      setArticles,
      setSources,
      setDocCountOverTime,
      finalOptions
    );
    setPage(page + 1);
  };

  const onSwitchPressed = (value) => {
    const newOptions = {
      ...searchOptions,
      sortField: value,
    };
    setOptionsAndInitFetch(newOptions);
  };

  const _keyExtractor = (item, index) => "-list-item-" + index;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.container}>
            {isWithSearch ? (
              <SearchBox
                setAndFetch={setOptionsAndInitFetch}
                sources={sources}
              />
            ) : (
              <View style={styles.titleContainer}>
                <Text style={styles.title1}>{category}</Text>
                <SwitchButton
                  style={styles.switch}
                  textLeft={"Date"}
                  textRight={"Hot"}
                  valueLeft={"date"}
                  valueRight={"hot"}
                  onSwitchPressed={onSwitchPressed}
                />
              </View>
            )}
            {isLoading && page < 3 ? (
              <ActivityIndicator
                size="small"
                color={Colors.activityIndicator}
              />
            ) : (
              <View />
            )}
            <SparkLine values={docCountOverTime} />
          </View>
        }
        onRefresh={() => setOptionsAndInitFetch(searchOptions)}
        refreshing={false}
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
    </View>
  );
};
