import * as Colors from "./colors";
import * as TextFormat from "./text";
import * as Shapes from "./shapes";
import * as Spaces from "./spaces";
import * as BasicStyles from "./basicStyles";

export { Colors, TextFormat, Shapes, Spaces, BasicStyles };

import { StyleSheet } from "react-native";

const bases = {
  container: BasicStyles.container,
  text: BasicStyles.text,
  title1: BasicStyles.title1,
  title2: BasicStyles.title2,
};

export const createStyles = (overrides = {}) => {
  const basesKeys = Object.keys(bases);
  const overridesKeys = Object.keys(overrides);
  const onlyBases = new Set(basesKeys);
  const onlyOverrides = new Set(overridesKeys);
  const common = new Set();
  for (let elem of basesKeys) {
    if (onlyOverrides.has(elem)) {
      onlyOverrides.delete(elem);
      onlyBases.delete(elem);
      common.add(elem);
    }
  }
  const finalStyle = {};
  for (let k of onlyBases) {
    finalStyle[k] = bases[k];
  }
  for (let k of onlyOverrides) {
    finalStyle[k] = overrides[k];
  }
  for (let k of common) {
    finalStyle[k] = { ...bases[k], ...overrides[k] };
  }
  return StyleSheet.create(finalStyle);
};
