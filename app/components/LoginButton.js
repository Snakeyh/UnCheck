import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {material} from 'react-native-typography';

const LoginButton = ({onPress}) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={onPress} style={styles.button_enabled}>
                <Text style={material.button}>LOGIN</Text>
            </TouchableOpacity>
            {/*
            <TouchableOpacity disabled={true} onPress={onPress} style={styles.button_disabled}>
                <Text style={material.button}>LOGIN</Text>
            </TouchableOpacity>
            */}
        </View>
            );
};

const styles = {
    view: {
        flex: 1,
        backgroundColor: "#282b28",
    },
    button_enabled: {
        color: "#282b28",
        marginTop: 10,
        marginLeft: "5%",
        marginRight: "5%",
        height: 48,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#EA6E34",
        alignItems: 'center'
    },
    button_disabled: {
        color: "#282b28",
        marginTop: 10,
        marginLeft: "5%",
        marginRight: "5%",
        height: 48,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#5c5f5c",
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 18
    }

};

LoginButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default LoginButton;