import React from "react";
import { SafeAreaView } from "react-native";

import { styles } from "./style";

import SwipeableNewsList from "@components/SwipeableNewsList";

/**
 * Main page, display a SwipeableNewsList
 */
export default Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SwipeableNewsList navigation={navigation} />
    </SafeAreaView>
  );
};
