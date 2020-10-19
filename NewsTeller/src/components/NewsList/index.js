import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, TextInput, Text} from 'react-native';
import {styles} from './style';
import {Colors} from '@styles';
import {fetchNewsApi} from '@helpers/APIConnect';

import NewsCard from '@components/NewsCard';
import ButtonBar from '@components/ButtonBar';

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
                  fetchNewsApi(setLoading, setArticles, searchInput)
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
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.activityIndicator} />
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
