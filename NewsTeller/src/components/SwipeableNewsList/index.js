import React, { useEffect, useState } from "react";
import { Colors } from "@styles";

import { styles } from "./style";

import NewsList from "@components/NewsList";
import Swiper from "react-native-swiper";

import { fetchCategories } from "@helpers/APIConnect";
import { View, ActivityIndicator, Text } from "react-native";

/**
 * Display NewsLists that can be swipped
 */
export default SwipeableNewsList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch which categories are available
    fetchCategories(setLoading, setCategories);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.SECONDARY_COLOR} />
      ) : (
        <Swiper
          loop={false}
          loadMinimal={true}
          loadMinimalSize={1}
          showsButtons={true}
          dotColor={Colors.LIGHT_GREY}
          activeDotColor={Colors.SECONDARY_COLOR} //{Colors.SECONDARY_COLOR}
          nextButton={<Text style={styles.swipeButtons}>›</Text>}
          prevButton={<Text style={styles.swipeButtons}>‹</Text>}
        >
          {
            // Adding a void category creates a search NewsList
            ["", ...categories].map((item) => (
              <NewsList
                key={item}
                navigation={navigation}
                category={item}
                isWithSearch={item == ""}
                shouldDisplayTag={item == ""}
              />
            ))
          }
        </Swiper>
      )}
    </View>
  );
};
