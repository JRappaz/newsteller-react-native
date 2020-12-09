import * as TextFormat from "./text";
import { Colors } from "./colors";

export const container = {
  flex: 1,
  width: "100%",
  alignSelf: "center",
  backgroundColor: Colors.background,
};

export const text = {
  fontFamily: TextFormat.font,
  fontSize: TextFormat.smallSize,
  color: Colors.text,
};

export const title1 = {
  fontFamily: TextFormat.font,
  fontSize: TextFormat.largeSize,
  color: Colors.title,
  textTransform: "capitalize",
};

export const title2 = {
  fontFamily: TextFormat.font,
  fontSize: TextFormat.midSize,
  color: Colors.title,
  textTransform: "capitalize",
};
