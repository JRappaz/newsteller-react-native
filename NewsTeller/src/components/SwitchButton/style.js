import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from "@styles";

export const styles = createStyles({
  switchContainer: {
    ...BasicStyles.container,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginHorizontal: Spaces.small,
  },
});
