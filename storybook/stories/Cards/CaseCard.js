import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {material} from "react-native-typography";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ripple from 'react-native-material-ripple';


const CaseCard = ({cardData, onPress}) => {
    return(
        /* Card */
        <Ripple>
        <TouchableOpacity onPress={onPress} style={styles.card}>
            {/* Titles & Heading*/}
            <View style={styles.headings}>
                <Text style={material.title}>Ärende #{cardData.id}</Text>
                <Text style={material.subheading}>{cardData.name}</Text>
            </View>
            {/* Titles & Heading*/}
            <View>
                <View style={styles.boxRow}>
                    <Icon name={"place"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>{cardData.address}</Text>
                </View>
                <View style={styles.boxRow}>
                    <Icon name={"layers"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>3 Områden</Text>
                </View>
                <View style={[styles.boxRow, styles.secondRowSpacing]}>
                    <View style={styles.item}>
                        <Icon name={"details"} size={18} style={styles.icon}/>
                        <Text style={material.body1}>{cardData.type}</Text>
                    </View>
                    <View style={styles.distance}>
                        <Text style={[material.titleObject]}>{cardData.distance} km</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </Ripple>

    );
};

const styles = {
    card: {
        height: 138,
        backgroundColor: 'white',
        padding: 8,
        margin: "5%",
        marginBottom: 0,
        borderRadius: 5,
        shadowColor: "#0",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 4.27,
        elevation: 10,
        borderColor: "white"
    },
    boxRow:{
        flexDirection: "row",
    },
    secondRowSpacing:{
      justifyContent: "space-between"
    },
    headings: {
        marginBottom: 5,
    },
    item: {
      flexDirection: "row",
    },
    icon: {
        marginRight: 3,
        width: 18,
        color: "#EA6E34",
    },
    distance: {
        marginTop: -5
    }

};

export default CaseCard;