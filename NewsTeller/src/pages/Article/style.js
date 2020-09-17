import {StyleSheet} from 'react-native';
import {font, textSize, textColor} from '@themes/Text';
import {ArticleBackgroundColor} from '@themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: ArticleBackgroundColor,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  text: {
    margin: 10,
    fontFamily: font,
    fontSize: textSize,
    color: textColor,
  },
});
