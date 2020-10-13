import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {styles} from './style';
import {ActivityIndicatorColor} from '@themes/Colors';

import {fetchNewsApi} from '@helpers/APIConnect';

import NewsCard from '@components/NewsCard';

/**
 * Display a list of articles in NewsCard fetched from APIConnect
 *    searchTerm - set the initial search term or category of the NewsList
 *    isWithSearch - if true allow user to do search from a text input
 */
export default NewsList = ({navigation, searchTerm, isWithSearch = false}) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Initial fetch for articles
    fetchNewsApi(setLoading, setArticles, searchTerm);
  }, [searchTerm]);

  const _keyExtractor = (item, index) => 'list-item-' + index;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {isWithSearch ? (
          // Allow user to do research if option isWithSearch activated
          <View>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="search.."
                onChangeText={(newText) => setSearchInput(newText)}
                value={searchInput}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={'search'}
                onPress={() =>
                  fetchNewsApi(setLoading, setArticles, searchInput)
                }
              />
            </View>
          </View>
        ) : (
          <Text style={styles.title}>{searchTerm}</Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" color={ActivityIndicatorColor} />
        ) : (
          <FlatList
            style={styles.list}
            data={articles}
            keyExtractor={_keyExtractor}
            numColumns={1}
            renderItem={({item}) => (
              <NewsCard navigation={navigation} newsItem={item} />
            )}
          />
        )}
      </View>
    </View>
  );
};
