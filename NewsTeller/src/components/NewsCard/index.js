import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';

/**
 *  Display the article's title, source, publish date and number of reaction in card
 *  The card is clickable: on click navigate to WebDisplayer page
 */
export default NewsCard = ({navigation, newsItem}) => {
  const [reaction, setReaction] = useState(0);

  useEffect(() => {
    // Count the number of reaction
    setReaction(
      newsItem.favorite_count +
        newsItem.quote_count +
        newsItem.reply_count +
        newsItem.retweet_count,
    );
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // Navigate to WebDisplayer when the user clicks on the card
          navigation.navigate('WebDisplayer', {url: newsItem.url});
        }}>
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
