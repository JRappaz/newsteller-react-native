import React from 'react';
import {View, FlatList} from 'react-native';

import NewsCard from '@components/NewsCard';

const trumpArticles = require('@data/news_sample.json');

const _keyExtractor = (item, index) => item._id;

export default Main = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={trumpArticles.hits.hits}
        keyExtractor={_keyExtractor}
        numColumns={1}
        renderItem={({item}) => (
          <NewsCard navigation={navigation} newsItem={item} />
        )}
      />
    </View>
  );
};
