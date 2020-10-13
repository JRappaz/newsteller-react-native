import {StyleSheet} from 'react-native';
import {headerFont, headerTextSize, headerTextColor} from '@themes/Text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  title: {
    fontFamily: headerFont,
    fontSize: headerTextSize,
    fontWeight: 'bold',
    color: headerTextColor,
  },
  logo: {
    marginRight: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
/*
container: {
  flex: 1,
  marginRight: 170,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
},
title: {
  fontFamily: headerFont,
  fontSize: headerTextSize,
  fontWeight: 'bold',
  color: headerTextColor,
},
logo: {
  marginHorizontal: 10,
  width: 40,
  height: 40,
  resizeMode: 'contain',
},
*/
