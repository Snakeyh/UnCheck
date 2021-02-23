import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple'

const MapCard = () => {
    return(
        /* Card */
        <Ripple>
            <TouchableOpacity style={styles.card}>
                <Text>Map will show here</Text>
            </TouchableOpacity>
        </Ripple>
    )
};

const styles = {
    card: {
        height: 138,
        backgroundColor: 'white',
        padding: 8,
        margin: "5%",
        marginBottom: 0,
        borderRadius: 5,
        border: 1,
        borderWidth: 1,
        shadowColor: "#0",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 4.27,
        elevation: 10,
        borderColor: "white"
    }
};

export default MapCard;