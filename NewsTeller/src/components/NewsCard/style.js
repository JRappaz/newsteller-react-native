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
    backgroundColor: Colors.newsCardBackground,
    marginBottom: Spaces.mid,
    padding: Spaces.mid,
    borderRadius: Shapes.rounded,
  },
  title: {
    ...BasicStyles.title2,
    color: Colors.title,
  },
  text: {
    ...BasicStyles.text,
    color: Colors.metaData,
  },
  metaDataBox: {
    ...BasicStyles.container,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spaces.mid,
  },
});
