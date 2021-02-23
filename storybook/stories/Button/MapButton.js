import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import {TouchableOpacity} from 'react-native';

const MapButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity onPress = {onPress} style={styles.button}>
            <Icon name={icon} size={24}/>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        backgroundColor: "#EA6E34",
        height: 56,
        width: 56,
        borderRadius: 50,
        shadowColor: "#0",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 4.27,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {

    }
};

MapButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default MapButton;