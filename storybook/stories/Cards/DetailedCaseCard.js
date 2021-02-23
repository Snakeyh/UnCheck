import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {material} from "react-native-typography";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailedCaseCard = ({cardData}) => {
    return(

        <View style={styles.card}>
            {/* Title & Heading */}
            <View style={styles.headings}>
                <Text style={material.title}>Ärende #{cardData.id}</Text>
                <Text style={material.subheading}>{cardData.name}</Text>
            </View>
            {/* Caste Details */}
            <View style={styles.details}>
                <View style={styles.infoRow}>
                    <Icon name={"place"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>{cardData.address}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name={"layers"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>3 områden</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name={"details"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>{cardData.type}</Text>
                </View>
            </View>
            {/* Contact Information */}
            <View style={styles.contactInfo}>
                <Text style={material.body2}>Kontakt:</Text>
                <View style={styles.infoRow}>
                    <Icon name={"person"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>Namn Namnsson</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name={"phone"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>07012345678</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name={"email"} size={18} style={styles.icon}/>
                    <Text style={material.body1}>namn.namnsson@gmail.com</Text>
                </View>

            </View>
        </View>
    );
};

const styles = {
    card: {
        height: 232,
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
    },
    infoRow: {
        flexDirection: "row",
    },
    headings: {
        marginBottom: 5
    },
    details: {
    },
    icon: {
        marginRight: 3,
        width: 18,
        color: "#EA6E34"
    },
    contactInfo: {
        borderTop: 1,
        borderTopWidth: 1,
        borderColor: "grey",
        marginTop: 5,
        paddingTop: 5
    }
};

export default DetailedCaseCard;