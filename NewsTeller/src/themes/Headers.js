import {HeaderColor} from '@themes/Colors';
import {headerFont, headerTextSize, headerTextColor} from '@themes/Text';

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
};
