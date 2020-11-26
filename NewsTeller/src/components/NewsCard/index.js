import React, { memo } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

/**
 *  Display the article's title, source, publish date and number of reaction in card
 *  The card is clickable: on click navigate to WebDisplayer page
 */

export default memo(function NewsCard({ navigation, newsItem }) {
  const getReaction = () => {
    return (
      newsItem.favoriteCount +
      newsItem.quoteCount +
      newsItem.replyCount +
      newsItem.retweetCount
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // Navigate to WebDisplayer when the user clicks on the card
        navigation.navigate("WebDisplayer", { url: newsItem.url });
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title2}>{newsItem.title}</Text>
        <View style={styles.metaDataBox}>
          <Text style={styles.text}>{newsItem.sourceName}</Text>
          <Text style={styles.text}>{"-"}</Text>
          <Text style={styles.text}>
            {
              //getReaction() == 0 ? "No reactions" : getReaction()
              getReaction()
            }
          </Text>
          <Text style={styles.text}>{"-"}</Text>
          <Text style={styles.text}>
            {new Date(newsItem.publishDatetime).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {newsItem.topImageURL ? (
          <Image
            style={styles.image}
            source={{
              uri: newsItem.topImageURL,
            }}
          />
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
});
