import React from 'react';

import {HeaderColor} from '@themes/Colors';
import {headerFont, headerTextSize, headerTextColor} from '@themes/Text';

import LogoTitle from '@components/LogoTitle';

// Header style
export const basicHeader = {
  headerStyle: {
    backgroundColor: HeaderColor,
  },
  headerTintColor: headerTextColor,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: headerFont,
    fontSize: headerTextSize,
  },
  headerTitle: () => <LogoTitle />,
};

export const basicHeaderOptions = {};
