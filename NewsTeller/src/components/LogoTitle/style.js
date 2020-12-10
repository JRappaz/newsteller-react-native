import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from "@styles";

export const styles = createStyles({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title1: {
    fontWeight: "bold",
    color: Colors.headerText,
  },
  logo: {
    width: Shapes.midSize,
    height: Shapes.midSize,
    resizeMode: "contain",
    marginRight: Spaces.mid,
  },
});
