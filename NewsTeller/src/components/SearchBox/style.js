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
    ...BasicStyles.container,
    width: "85%",
  },
  bottomContainer: {
    ...BasicStyles.container,
    flex: 4,
  },
  buttonContainer: {
    ...BasicStyles.container,
    marginBottom: Spaces.mid,
  },
  textInputContainer: {
    width: "100%",
    borderRadius: Shapes.rounded,
    alignSelf: "center",
    marginVertical: Spaces.mid,
    backgroundColor: Colors.textInputs,
    paddingHorizontal: Spaces.mid,
    textTransform: "capitalize",
    height: Shapes.midSize,
    justifyContent: "center",
  },
  pickersContainer: {
    ...BasicStyles.container,
    flex: 1,
    flexDirection: "row",
  },
  smallPicker: {
    flex: 4,
  },
  largePicker: {
    flex: 5,
  },
});
