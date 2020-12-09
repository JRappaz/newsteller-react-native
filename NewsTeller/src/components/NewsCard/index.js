import React, { memo } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

/**
 *  Display the article's title, source, publish date and number of reaction in card
 *  The card is clickable: on click navigate to WebDisplayer page
 */

export default memo(function NewsCard({
  navigation,
  newsItem,
  shouldDisplayTag,
}) {
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
          <Text style={styles.metaText}>{newsItem.sourceName}</Text>
          <Text style={styles.metaText}>{"-"}</Text>
          <Text style={styles.metaText}>
            {
              //getReaction() == 0 ? "No reactions" : getReaction()
              getReaction()
            }
          </Text>
          <Text style={styles.metaText}>{"-"}</Text>
          <Text style={styles.metaText}>
            {new Date(newsItem.publishDatetime).toLocaleDateString()}
          </Text>
        </View>
        {shouldDisplayTag ? (
          <View style={styles.tagBox}>
            {newsItem.tags.map((tag) => (
              <View style={styles.tagItem}>
                <Text key={tag} style={styles.tagText}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View />
        )}
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
