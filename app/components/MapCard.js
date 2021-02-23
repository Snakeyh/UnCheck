import React, { Component } from "react";
import { View, TouchableOpacity, Linking, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polygon, Polyline } from "react-native-maps";
import Ripple from "react-native-material-ripple";
import { RaisedTextButton } from "react-native-material-buttons";

let keyCounter = 0;

export default class MapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
      width: null
    };
  }

  centerOnCase(animate) {
    let cords = [];

    this.props.caseData.caseGeometry.map(element => {
      element.Geometry.boundingBox.map(element => {
        cords.push(element);
      });
    });

    this.map.fitToCoordinates(cords, {
      edgePadding: { top: 30, right: 30, bottom: 30, left: 30 },
      animated: animate
    });
  }

    render() {
        return (
            <View style={styles.card}>
                <Ripple onPress={this.props.onPress}>
                    {this.state.height == null ? (
                        <View
                            onLayout={e => {
                                let {height, width} = e.nativeEvent.layout;
                                this.setState({
                                    height: Math.round(height),
                                    width: Math.round(width)
                                });
                            }}
                            style={styles.innerView}
                        />
                    ) : (
                        <MapView
                            onPress={this.props.onPress}
                            provider={PROVIDER_GOOGLE}
                            ref={ref => {
                                this.map = ref;
                            }}
                            style={[styles.innerView, {width: this.state.width}]}
                            onLayout={() => this.centerOnCase(false)}
                            zoomEnabled={false}
                            scrollEnabled={false}
                        >
                            {this.props.caseData.caseGeometry.map(element => {
                                return (
                                    <Polygon
                                        key={++keyCounter}
                                        coordinates={element.Geometry.points}
                                        fillColor={"rgba(41,98,255,0.3)"}
                                        strokeColor={"rgba(41,98,255,0.7)"}
                                    />
                                );
                            })}
                        </MapView>
                    )}
                </Ripple>
                <RaisedTextButton
                    onPress={Platform.OS === 'ios' ? this._navigateIOS : this._navigateANDROID}
                    style={styles.navButton}
                    title={"Navigera"}
                    color={"#ea6e34"}
                    titleColor={"#000"}
                />
            </View>
        );
    }

  _navigateANDROID = () => {
    const url =
      "https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=" +
      this.props.caseData.StreetAddress;
    Linking.openURL(url).catch(err => console.error("Could not open map", err));
  };

  _navigateIOS = () => {
    const url = "maps://app?&daddr=" + this.props.caseData.StreetAddress;
    Linking.openURL(url).catch(err => console.error("Could not open map", err));
  };
}

const styles = {
  card: {
    height: 192,
    backgroundColor: "white",
    margin: "3%",
    marginBottom: 0,
    borderRadius: 5,
    borderColor: "white",
    overflow: "hidden"
  },
  innerView: {
    height: 138,
    borderRadius: 5
  },
  navButton: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  }
};
