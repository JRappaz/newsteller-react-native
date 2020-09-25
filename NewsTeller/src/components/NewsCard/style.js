import {StyleSheet} from 'react-native';
import {
  font,
  textSize,
  titleColor,
  titleSize,
  metaDataColor,
} from '@themes/Text';
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
  title: {
    fontFamily: font,
    fontSize: titleSize,
    color: titleColor,
  },
  text: {
    fontFamily: font,
    fontSize: textSize,
    color: metaDataColor,
  },
  metaData: {},
  metaDataBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
