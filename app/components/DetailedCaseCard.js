import React, { Component } from "react";
import { Text, View, Linking } from "react-native";
import { material } from "react-native-typography";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RaisedTextButton } from "react-native-material-buttons";
import moment from "moment";

export default class DetailedCaseCard extends Component {
  render() {
    let startDate = moment
      .unix(this.props.cardData.StartDate / 1000)
      .format("YYYY-MM-DD");
    let endDate = moment
      .unix(this.props.cardData.EndDate / 1000)
      .format("YYYY-MM-DD");

    return (
      <View style={styles.card}>
        {/* Title & Heading */}
        <View style={styles.headings}>
          <Text style={material.title}>
            Ärende #{this.props.cardData.Number}
          </Text>
          <Text style={material.subheading}>{this.props.cardData.Name}</Text>
        </View>
        {/* Caste Details */}
        <View style={styles.details}>
          <View style={styles.infoRow}>
            <Icon name={"place"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.StreetAddress}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name={"date-range"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {startDate} - {endDate}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name={"crop-free"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.caseGeometry.length +
                (this.props.cardData.caseGeometry.length > 1
                  ? " arbetsområden"
                  : " arbetsområde")}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name={"play-for-work"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.ExcavatingDepth + "m grävdjup"} 
            </Text>
          </View>
        </View>
        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <Text style={material.body2}>Kontakt:</Text>
          <View style={styles.infoRow}>
            <Icon name={"person"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.SiteContactName}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name={"phone"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.SiteContactPhone}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name={"email"} size={18} style={styles.icon} />
            <Text style={material.body1}>
              {this.props.cardData.AnswerContactValue}
            </Text>
          </View>
          <View style={[styles.infoRow, { justifyContent: "space-between" }]}>
            <RaisedTextButton
              onPress={this._call}
              style={styles.contactButton}
              title={"Ring"}
              color={"#ea6e34"}
              titleColor={"#000"}
            />
            <RaisedTextButton
              onPress={this._mail}
              style={styles.contactButton}
              title={"Email"}
              color={"#ea6e34"}
              titleColor={"#000"}
            />
          </View>
        </View>
      </View>
    );
  }

  _call = () => {
    const url = "tel://" + this.props.cardData.InquirerPhone;
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };

  _mail = () => {
    const url = "mailto:" + this.props.cardData.InquirerEmail + "?";
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
    
  };
}

const styles = {
  card: {
    height: 295,
    backgroundColor: "white",
    padding: 8,
    margin: "3%",
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 5,
    borderColor: "white"
  },
  infoRow: {
    flexDirection: "row"
  },
  headings: {
    marginBottom: 5
  },
  details: {},
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
  },
  contactButton: {
    marginTop: 8,
    width: "48%"
  }
};
