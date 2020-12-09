import * as Colors_light from "./colors_light";
import * as Colors_dark from "./colors_dark";
import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
const Colors = colorScheme === "dark" ? Colors_dark : Colors_light;

export { Colors };
