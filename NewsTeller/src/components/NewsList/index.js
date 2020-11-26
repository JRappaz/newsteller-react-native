import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, ActivityIndicator, Text, Switch } from "react-native";
import { styles } from "./style";
import { Colors } from "@styles";
import { fetchArticlesWithOptions } from "@helpers/APIConnect";

import NewsCard from "@components/NewsCard";
import SearchBox from "@components/SearchBox";
import SparkLine from "@components/SparkLine";

import { DEFAULT_SEARCH_OPTIONS } from "@helpers/APIConnect";

/**
 * Display a list of articles in NewsCard fetched from APIConnect
 *    category - set the category of the NewsList
 *    isWithSearch - if true allow user to do search from a text input
 */
export default NewsList = ({ navigation, category, isWithSearch = false }) => {
  const [resetCount, setResetCount] = useState(0);

  const [sources, setSources] = useState([]);
  const [docCountOverTime, setDocCountOverTime] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [searchOptions, setSearchOptions] = useState(DEFAULT_SEARCH_OPTIONS);

  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(1);

  const [sortingForCategories, setSortingForCategories] = useState(false);

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

    const finalOptions = {
      ...searchOptions,
      ...{ current: page },
    };

    if (!isWithSearch) {
      const filters = [];
      filters.push({ field: "tags", values: [category], type: "all" });
      finalOptions["filters"] = filters;
    }

    console.log(finalOptions);

    fetchArticlesWithOptions(
      setLoading,
      setArticles,
      setSources,
      setDocCountOverTime,
      finalOptions
    );
    setPage(page + 1);
  };

  const swtichPressed = () => {
    setSortingForCategories((previousState) => !previousState);
    const newOptions = {
      ...searchOptions,
      sortField: sortingForCategories ? "date" : "hot",
    };
    setSearchOptions(newOptions);
    setPage(1);
    setShouldFetch(true);
  };

  const _keyExtractor = (item, index) =>
    "r-" + resetCount + "-list-item-" + index;

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
                <View style={styles.switchContainer}>
                  <Text style={styles.text}>{"Date"}</Text>

                  <Switch
                    trackColor={{
                      false: Colors.LIGHT_GREY,
                      true: Colors.LIGHT_GREY,
                    }}
                    thumbColor={Colors.SECONDARY_COLOR}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={swtichPressed}
                    value={sortingForCategories}
                  />
                  <Text style={styles.text}>{"Hot"}</Text>
                </View>
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

//
