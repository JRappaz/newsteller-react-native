import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';

import {NewsTellerLogo} from '@assets/icons';

/**
 *  Display the logo next to "News-Teller"
 */
export default LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={NewsTellerLogo} style={styles.logo} />
      <Text style={styles.title}>{'News-Teller'}</Text>
    </View>
  );
};
