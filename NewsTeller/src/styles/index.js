import * as Colors from './colors';
import * as TextFormat from './text';
import * as Shapes from './shapes';
import * as Spaces from './spaces';
import * as BasicStyles from './basicStyles';

export {Colors, TextFormat, Shapes, Spaces, BasicStyles};

import {StyleSheet} from 'react-native';

const bases = {
  container: BasicStyles.container,
  text: BasicStyles.text,
  title1: BasicStyles.title1,
  title2: BasicStyles.title2,
};

export const createStyles = (overrides = {}) => {
  return StyleSheet.create({...bases, ...overrides});
};
