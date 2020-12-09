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
    backgroundColor: Colors.newsCardBackground,
    marginBottom: Spaces.mid,
    padding: Spaces.mid,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Shapes.veryRounded,
  },
  metaText: {
    ...BasicStyles.text,
    color: Colors.metaData,
  },
  metaDataBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spaces.mid,
  },
  tagBox: {
    flexDirection: "row",
    marginTop: Spaces.mid,
  },
  tagText: {
    ...BasicStyles.text,
    backgroundColor: Colors.tag,
    padding: Spaces.small,
    borderRadius: Shapes.veryRounded,
    paddingHorizontal: Spaces.mid,
    marginHorizontal: Spaces.small,
  },
  textContainer: {
    ...BasicStyles.container,
    flex: 4,
    backgroundColor: Colors.newsCardBackground,
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
  image: {
    flex: 1,
    borderRadius: Shapes.veryRounded,
  },
});
