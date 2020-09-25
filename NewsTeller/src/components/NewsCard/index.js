import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';

export default NewsCard = ({navigation, newsItem}) => {
  var reaction = 0;

  useEffect(() => {
    reaction =
      newsItem.favorite_count +
      newsItem.quote_count +
      newsItem.reply_count +
      newsItem.retweet_count;
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={
          () => Linking.openURL(newsItem.url)
          /*
          navigation.navigate('Article', {
            newsItem: newsItem,
          })
          */
        }>
        <Text style={styles.title}>{newsItem.title}</Text>
        <View style={styles.metaDataBox}>
          <Text style={[styles.text, styles.metaData]}>{newsItem.handle}</Text>
          <Text style={[styles.text, styles.metaData]}>{'-'}</Text>
          <Text style={[styles.text, styles.metaData]}>
            {reaction == 0 ? 'No reactions' : reaction}
          </Text>
          <Text style={[styles.text, styles.metaData]}>{'-'}</Text>
          <Text style={[styles.text, styles.metaData]}>
            {new Date(newsItem.publish_datetime).toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
