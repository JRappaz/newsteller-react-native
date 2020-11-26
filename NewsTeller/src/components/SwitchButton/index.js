import React, { useEffect, useState, useCallback } from "react";
import { Text, Switch, View } from "react-native";
import { styles } from "./style";
import { Colors } from "@styles";

/**
 *  Switch Button used to select one of two values
 */
export default SwitchButton = ({
  textLeft,
  textRight,
  valueLeft,
  valueRight,
  onSwitchPressed,
}) => {
  const [value, setValue] = useState(false);

  const switchPressed = () => {
    setValue((previousState) => !previousState);
    onSwitchPressed(value ? valueLeft : valueRight);
  };

  return (
    <View style={styles.switchContainer}>
      <Text style={styles.text}>{textLeft}</Text>
      <Switch
        trackColor={{
          false: Colors.LIGHT_GREY,
          true: Colors.LIGHT_GREY,
        }}
        thumbColor={Colors.SECONDARY_COLOR}
        ios_backgroundColor={Colors.LIGHT_GREY}
        onValueChange={switchPressed}
        value={value}
      />
      <Text style={styles.text}>{textRight}</Text>
    </View>
  );
};
