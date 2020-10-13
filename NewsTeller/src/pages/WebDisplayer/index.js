import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

import {styles} from './style';

/**
 *  Display a given web page within the app
 */
export default WebDisplayer = ({route}) => {
  const {url} = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} />
    </View>
  );
};
