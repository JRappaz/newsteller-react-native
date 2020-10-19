import React from 'react';
import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from '@styles';

import LogoTitle from '@components/LogoTitle';

// Header style
export const basicHeader = {
  headerStyle: {
    backgroundColor: Colors.headerColor,
  },
  headerTintColor: Colors.headerText,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: TextFormat.font,
    fontSize: TextFormat.largeSize,
  },
  headerTitle: () => <LogoTitle />,
};
