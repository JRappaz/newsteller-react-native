import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';

export default NewsCard = ({navigation, newsItem}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Article', {
            newsItem: newsItem,
          })
        }>
        <Text style={styles.text}>{newsItem._source.title}</Text>
        <Text style={styles.text}>{newsItem._source.publish_datetime}</Text>
      </TouchableOpacity>
    </View>
  );
};
