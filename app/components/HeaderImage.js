import React, { Component } from "react";
import { Image } from "react-native";

export default class HeaderImage extends Component {
  render() {
    return (
      <Image
        style={{ height: 35, width: 140, flex: 1 }}
        resizeMode="contain"
        source={require("../theme/images/header.png")}
      />
    );
  }
}
