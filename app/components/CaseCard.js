import React from "react";
import { Text, View, ScrollView } from "react-native";
import { material } from "react-native-typography";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ripple from "react-native-material-ripple";
import moment from "moment";

const CaseCard = ({ cardData, onPress }) => {
  let startDate = moment.unix(cardData.StartDate / 1000).format("YYYY-MM-DD");
  let endDate = moment.unix(cardData.EndDate / 1000).format("YYYY-MM-DD");

  return (
    <ScrollView>
      <Ripple onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.headings}>
            <Text style={material.title}>Ärende #{cardData.Number}</Text>
            <Text style={material.subheading}>{cardData.Name}</Text>
          </View>
          <View style={styles.boxRow}>
            <Icon name={"place"} size={18} style={styles.icon} />
            <Text style={material.body1}>{cardData.StreetAddress}</Text>
          </View>
          <View style={[styles.boxRow, styles.secondRowSpacing]}>
            <View style={styles.item}>
              <Icon name={"date-range"} size={18} style={styles.icon} />
              <Text style={material.body1}>
                {startDate} - {endDate}
              </Text>
            </View>
            <View style={styles.distance}>
              <Text style={[material.titleObject]}>
                {cardData.distance < 500
                  ? cardData.distance + " m"
                  : (cardData.distance / 1000).toFixed(1) + " km"}
              </Text>
            </View>
          </View>
        </View>
      </Ripple>
    </ScrollView>
  );
};

const styles = {
  card: {
    height: 122,
    backgroundColor: "white",
    padding: 8,
    margin: "3%",
    marginTop: 0,
    marginBottom: "3%",
    borderRadius: 5,
    borderColor: "white"
  },
  headings: {
    marginBottom: 5
  },
  boxRow: {
    flexDirection: "row"
  },
  secondRowSpacing: {
    justifyContent: "space-between"
  },
  item: {
    flexDirection: "row",
    alignSelf: "center"
  },
  icon: {
    marginRight: 5,
    width: 18,
    textAlign: "center",
    color: "#EA6E34"
  },
  distance: {
    justifyContent: "flex-end"
  }
};

export default CaseCard;
