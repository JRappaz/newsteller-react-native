import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Button,
  TextInput,
} from 'react-native';

import NewsCard from '@components/NewsCard';

export default Main = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Version with local server
    //fetchArticles();
    // Version with json with in folder data of the app
    //loadArticles();
    fetchApi();
  }, []);

  const loadArticles = () => {
    const trumpArticles = require('@data/news_sample.json');
    setArticles(trumpArticles.hits.hits);
    setLoading(false);
  };

  // Fetch local json
  const fetchArticles = () => {
    return fetch('http://10.0.2.2:3002/response')
      .then((response) => response.json())
      .then((json) => {
        setArticles(json.hits.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchApi = () => {
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
        console.log(data);
        setArticles(data);
        setLoading(false);
      });
  };

  const _keyExtractor = (item, index) => index;

  return (
    <View>
      <View>
        <TextInput
          placeholder="search.."
          onChangeText={(newText) => setSearchTerm(newText)}
          value={searchTerm}></TextInput>
        <Button title={'search'} onPress={() => fetchApi()} />
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <View>
          <FlatList
            data={articles}
            keyExtractor={_keyExtractor}
            numColumns={1}
            renderItem={({item}) => (
              <NewsCard navigation={navigation} newsItem={item} />
            )}
          />
        </View>
      )}
    </View>
  );
};
