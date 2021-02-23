import { Platform, StyleSheet } from "react-native";

const create = styles => {
  const platformStyles = {};
  Object.keys(styles).forEach(name => {
    let { ios, android, ...style } = { ...styles[name] };
    if (ios && Platform.OS === "ios") {
      style = { ...style, ...ios };
    }
    if (android && Platform.OS === "android") {
      style = { ...style, ...android };
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
};

const obj = {
  create: create
};

export default obj;
