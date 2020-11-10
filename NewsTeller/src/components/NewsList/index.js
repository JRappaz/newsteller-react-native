import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, ActivityIndicator, TextInput, Text} from 'react-native';
import {styles} from './style';
import {Colors} from '@styles';
import {
  fetchArticlesWithSearchTerm,
  fetchArticlesFromCategory,
} from '@helpers/APIConnect';

import NewsCard from '@components/NewsCard';
import ButtonBar from '@components/ButtonBar';

/**
 * Display a list of articles in NewsCard fetched from APIConnect
 *    searchTerm - set the initial search term or category of the NewsList
 *    isWithSearch - if true allow user to do search from a text input
 */
export default NewsList = ({navigation, searchTerm, isWithSearch = false}) => {
  const [isLoading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  const [shouldFetch, setShouldFetch] = useState(false);
  const [page, setPage] = useState(0);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  useEffect(() => {
    // Initial fetch for articles
    if (!isLoading && articles.length == 0) {
      fetchArticlesFromCategory(setLoading, setArticles, searchTerm, page);
    }

    if (!shouldFetch) {
      return;
    }

    const fetch = async () => {
      console.warn('Fetch !');
      fetchArticlesFromCategory(setLoading, setArticles, searchTerm, page);

      setShouldFetch(false);

      //increment page for the next call
      setPage(page + 1);
    };

    fetch();
  }, [shouldFetch, articles]);

  const _keyExtractor = (item, index) => 'list-item-' + index;

  return (
    <View style={styles.container}>
      {isLoading && articles == [] ? (
        <ActivityIndicator size="small" color={Colors.activityIndicator} />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={styles.container}>
              {isWithSearch ? (
                // Allow user to do research if option isWithSearch activated
                <View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      placeholder="Search..."
                      onChangeText={(newText) => setSearchInput(newText)}
                      value={searchInput}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <ButtonBar
                      title={'search'}
                      onPress={() =>
                        fetchArticlesWithSearchTerm(
                          setLoading,
                          setArticles,
                          searchInput,
                          page,
                        )
                      }
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{searchTerm}</Text>
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
          renderItem={({item}) => (
            <NewsCard navigation={navigation} newsItem={item} />
          )}
        />
      )}
    </View>
  );
};
