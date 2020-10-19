import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from '@styles';

export const styles = createStyles({
  container: {
    ...BasicStyles.container,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    ...BasicStyles.title1,
    fontWeight: 'bold',
    color: Colors.headerText,
  },
  logo: {
    width: Shapes.midSize,
    height: Shapes.midSize,
    resizeMode: 'contain',
    marginRight: Spaces.mid,
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
