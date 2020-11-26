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
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  logo: {
    width: Shapes.smallSize,
    height: Shapes.smallSize,
    resizeMode: "contain",
    marginRight: Spaces.mid,
  },
  filterItem: {
    backgroundColor: Colors.SECONDARY_COLOR_LIGHT,
    marginVertical: Spaces.small,
    marginHorizontal: Spaces.small,
    borderRadius: Shapes.rounded,
    padding: Spaces.small,
  },
  filterItemSelected: {
    backgroundColor: Colors.SECONDARY_COLOR,
    marginVertical: Spaces.small,
    marginHorizontal: Spaces.small,
    borderRadius: Shapes.rounded,
    padding: Spaces.small,
  },
});
