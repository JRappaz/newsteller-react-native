import {StyleSheet} from 'react-native';
import {buttonFont, buttonTextSize, buttonTextColor} from '@themes/Text';
import {buttonColor} from '@themes/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonColor,
    borderRadius: 5,
    opacity: 0.2,
  },
  title: {
    fontFamily: buttonFont,
    fontSize: buttonTextSize,
    color: buttonTextColor,
    textTransform: 'capitalize',
  },
});
