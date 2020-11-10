import {
  createStyles,
  Colors,
  TextFormat,
  Shapes,
  Spaces,
  BasicStyles,
} from "@styles";

export const styles = createStyles({
  bottomContainer: {
    ...BasicStyles.container,
    flex: 4,
  },
  buttonContainer: {
    ...BasicStyles.container,
    marginBottom: Spaces.mid,
    width: "90%",
  },
  textInputContainer: {
    borderRadius: Shapes.rounded,
    width: "90%",
    alignSelf: "center",
    marginVertical: Spaces.mid,
    backgroundColor: Colors.textInputs,
    paddingHorizontal: Spaces.mid,
    textTransform: "capitalize",
    height: Shapes.midSize,
    justifyContent: "center",
  },
});
