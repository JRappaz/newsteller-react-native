import {StyleSheet} from 'react-native';
import {font, titleSize, titleColor} from '@themes/Text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 5,
  },
  buttonContainer: {
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    flex: 1,
    fontFamily: font,
    fontSize: 30,
    color: titleColor,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 60,
  },
  button: {
    color: 'yellow',
  },
});
