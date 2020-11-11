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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spaces.mid,
  },
  textContainer: {
    ...BasicStyles.container,
    flex: 4,
  },
  imageContainer: {
    ...BasicStyles.container,
    flex: 1,
    backgroundColor: Colors.EMPTY_IMAGE,
    marginLeft: 15,
    width: 60,
    height: 60,
    borderRadius: Shapes.veryRounded,
  },
  image: { flex: 1, borderRadius: Shapes.veryRounded },
});
