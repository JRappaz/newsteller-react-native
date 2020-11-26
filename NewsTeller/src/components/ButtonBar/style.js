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
    width: "100%",
    height: Shapes.midSize,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.buttons,
    borderRadius: Shapes.rounded,
    opacity: 0.6,
  },
  title1: {
    color: Colors.buttonsText,
  },
});
