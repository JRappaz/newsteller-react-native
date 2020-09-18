import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import NewsCard from '@components/NewsCard';

//const trumpArticles = require('@data/news_sample.json');

const _keyExtractor = (item, index) => item._id;

export default Main = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

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
  return (
    <View>
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
