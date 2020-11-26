import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

/**
 *  Display the logo next to "News-Teller"
 */
export default ButtonBar = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title1}</Text>
    </TouchableOpacity>
  );
};
