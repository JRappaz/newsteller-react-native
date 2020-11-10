import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from "@styles";

export const styles = createStyles({
  titleContainer: {
    ...BasicStyles.container,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...BasicStyles.title1,
    fontSize: TextFormat.extraLargeSize,
    alignSelf: "center",
    color: Colors.SECONDARY_COLOR,
  },
  list: {
    flex: 1,
    width: "100%",
    marginTop: Spaces.mid,
    marginBottom: 60,
  },
});
