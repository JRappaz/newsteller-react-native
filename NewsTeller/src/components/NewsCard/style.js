import {StyleSheet} from 'react-native';
import {font, textSize, textColor} from '@themes/Text';
import {NewsCardBackGrounfColor} from '@themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: NewsCardBackGrounfColor,
    alignSelf: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: font,
    fontSize: textSize,
    color: textColor,
  },
});
