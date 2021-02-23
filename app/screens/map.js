import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polygon, Polyline } from "react-native-maps";
import MapButton from "../components/MapButton";

let keyCounter = 0;

export default class Map extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#282b28",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#FFF"
  };

  constructor(props) {
    super(props);
    this.state = {
      userLocation: null
    };
    this.mapData = this.props.navigation.getParam("caseData");
  }

  goToCurrentPostion() {
    navigator.geolocation.getCurrentPosition(position => {
      this.map.animateCamera({
        center: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        },
        zoom: 17
      });
    });
  }

  centerOnCase(animate) {
    let cords = [];

    this.mapData.caseGeometry.map(element => {
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
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={ref => {
            this.map = ref;
          }}
          style={styles.map}
          onLayout={() => this.centerOnCase(false)}
          showsUserLocation={true}
        >
          {this.mapData.caseGeometry.map(element => {
            return (
              <Polygon
                key={++keyCounter}
                coordinates={element.Geometry.points}
                fillColor={"rgba(41,98,255,0.3)"}
                strokeColor={"rgba(41,98,255,0.7)"}
              />
            );
          })}
          {this.mapData.caseGeometry.map(element =>
            element.Geometry.waterFeatures.features.map(element => (
              <Polyline
                key={++keyCounter}
                coordinates={element.geometry.coordinates}
                strokeColor="#0d47a1"
                strokeWidth={3}
              />
            ))
          )}
          {this.mapData.caseGeometry.map(element =>
            element.Geometry.fiberSafeFeatures.features.map(element => (
              <Polyline
                key={++keyCounter}
                coordinates={element.geometry.coordinates}
                strokeColor="#00c853"
                strokeWidth={3}
              />
            ))
          )}
          {this.mapData.caseGeometry.map(element =>
            element.Geometry.fiberUnsafeFeatures.features.map(element => (
              <Polyline
                key={++keyCounter}
                coordinates={element.geometry.coordinates}
                strokeColor="#dd2c00"
                strokeWidth={3}
              />
            ))
          )}
        </MapView>

        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            alignSelf: "flex-end" //for align to right,
          }}
        >
          <MapButton onPress={() => console.warn("")} icon={"create"} />
          <MapButton
            onPress={() => this.centerOnCase(true)}
            icon={"crop-free"}
          />
          <MapButton
            onPress={() => this.goToCurrentPostion()}
            icon={"my-location"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
