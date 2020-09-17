import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {styles} from './style';

export default Article = ({navigation, route}) => {
  const {newsItem} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.text}>{newsItem._source.publish_datetime}</Text>
        <Text style={styles.text}>{newsItem._source.title}</Text>
        <Text style={styles.text}>{newsItem._source.text}</Text>
      </ScrollView>
    </View>
  );
};
