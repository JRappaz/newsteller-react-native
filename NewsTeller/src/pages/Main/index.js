import React from 'react';
import {View} from 'react-native';

import {styles} from './style';

import SwipeableNewsList from '@components/SwipeableNewsList';

/**
 * Main page, display a SwipeableNewsList
 */
export default Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SwipeableNewsList navigation={navigation} />
    </View>
  );
};
