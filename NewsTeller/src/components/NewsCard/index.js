import React, { memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

/**
 *  Display the article's title, source, publish date and number of reaction in card
 *  The card is clickable: on click navigate to WebDisplayer page
 */

export default memo(function NewsCard({ navigation, newsItem }) {
  const getReaction = () => {
    return (
      newsItem.favorite_count +
      newsItem.quote_count +
      newsItem.reply_count +
      newsItem.retweet_count
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // Navigate to WebDisplayer when the user clicks on the card
          navigation.navigate("WebDisplayer", { url: newsItem.url });
        }}
      >
        <Text style={styles.title}>{newsItem.title}</Text>
        <View style={styles.metaDataBox}>
          <Text style={styles.text}>{newsItem.handle}</Text>
          <Text style={styles.text}>{"-"}</Text>
          <Text style={styles.text}>
            {getReaction() == 0 ? "No reactions" : getReaction()}
          </Text>
          <Text style={styles.text}>{"-"}</Text>
          <Text style={styles.text}>
            {new Date(newsItem.publish_datetime).toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});
