import React, { Component } from "react";
import { Text, View } from "react-native";
import { material } from "react-native-typography";
import { RaisedTextButton } from "react-native-material-buttons";

export default class AreaCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Klart",
      done: false,
      color: "#EA6E34"
    };
  }

  render() {
    return (
      <View>
        <View style={styles.card}>
          {/* Title & Heading */}
          <View style={styles.headings}>
            <Text style={material.title}>Område {this.props.areaId}</Text>
          </View>
          {/* Caste Details */}
          <View style={styles.details}>
            <Text style={material.body1}>{this.props.cardData.address}</Text>
            <Text style={material.body1}>
              {this.props.cardData.areaPins} markeringar
            </Text>
          </View>
          <View>
            <RaisedTextButton
              title={this.state.title}
              titleColor="#000000"
              color={this.state.color}
              onPress={() =>
                this.setState({
                  done: true,
                  title: "Ångra",
                  color: "rgb(224, 224, 224)"
                })
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  card: {
    height: 135,
    backgroundColor: "white",
    padding: 8,
    margin: "3%",
    marginBottom: 0,
    borderRadius: 5,
    borderColor: "white"
  },
  headings: {
    marginBottom: 5
    //backgroundColor: "blue"
  },
  details: {
    //backgroundColor: "yellow",
    marginBottom: 8
  }
};
