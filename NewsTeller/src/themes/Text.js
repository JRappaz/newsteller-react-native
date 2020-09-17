import {Platform} from 'react-native';

export const font = Platform.OS == 'ios' ? 'Avenir' : 'serif';
export const textColor = 'black';
export const textSize = 12;

export const headerFont = font;
export const headerTextColor = 'black';
export const headerTextSize = 16;
