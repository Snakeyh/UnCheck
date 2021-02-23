import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableHighlight } from "react-native";

const MapButton = ({ icon, onPress }) => {
  return (
    <TouchableHighlight
      underlayColor={"#e06931"}
      onPress={onPress}
      style={styles.button}
    >
      <Icon name={icon} size={24} color={"#000"} />
    </TouchableHighlight>
  );
};

const styles = {
    button: {
        backgroundColor: "#EA6E34",
        height: 56,
        width: 56,
        borderRadius: 50,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 4.27,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginRight: 10
    },
    icon: {}
};

MapButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default MapButton;
