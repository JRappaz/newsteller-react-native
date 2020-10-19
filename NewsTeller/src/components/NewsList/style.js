import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from '@styles';

export const styles = createStyles({
  bottomContainer: {
    ...BasicStyles.container,
    flex: 4,
  },
  buttonContainer: {
    ...BasicStyles.container,
    marginBottom: Spaces.mid,
    width: '90%',
  },
  textInputContainer: {
    borderRadius: Shapes.rounded,
    width: '90%',
    alignSelf: 'center',
    marginVertical: Spaces.mid,
    backgroundColor: Colors.textInputs,
    paddingHorizontal: Spaces.mid,
    textTransform: 'capitalize',
  },
  titleContainer: {
    ...BasicStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...BasicStyles.title1,
    fontSize: TextFormat.extraLargeSize,
    alignSelf: 'center',
    color: Colors.SECONDARY_COLOR,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: Spaces.mid,
    marginBottom: 60,
  },
});
