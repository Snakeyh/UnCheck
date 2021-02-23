import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  RefreshControl
} from "react-native";

import CaseCard from "../components/CaseCard";
import HeaderImage from "../components/HeaderImage";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import geolib from "geolib";

const query = gql`
  {
    cases {
      Id
      Number
      Name
      StreetAddress
      StartDate
      EndDate
      caseGeometry {
        Geometry {
          centerPoint {
            latitude
            longitude
          }
        }
      }
    }
    devicePosition @client {
      latitude
      longitude
    }
  }
`;

export default class altCaseList extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#282b28",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitle: <HeaderImage />
  };

  constructor(props) {
    super(props);
  }


  sortByDistance = data => {
    data.cases.map(element => {
      let distanceArr = [];
      element.caseGeometry.map(element => {
        distanceArr.push(
          geolib.getDistance(
            element.Geometry.centerPoint,
            data.devicePosition
          )
        );
      });
      element.distance = Math.min.apply(null, distanceArr);
    });
    data.cases.sort((a, b) => (a.distance > b.distance ? 1 : -1));
  };

  render() {
    return (
      <Query query={query} notifyOnNetworkStatusChange={true}>
        {({ loading, error, data, refetch, networkStatus }) => {
          if ((loading && networkStatus != 4))
            return (
              <View style={[styles.mainContainer, styles.loadingContaier]}>
                <StatusBar backgroundColor="#000000" barStyle="light-content" />
                <ActivityIndicator size="large" color="#FFFFFF" />
              </View>
            );
          if (error) return <Text>Error message here {error}</Text>;
          this.sortByDistance(data);
          return (
            <View style={[styles.mainContainer, styles.listContainer]}>
              <StatusBar backgroundColor="#000000" barStyle="light-content" />
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={networkStatus === 4}
                    onRefresh={refetch}
                  />
                }
                style={styles.listContainer}
              >
                {data.cases.map(element => (
                  <CaseCard
                    key={element.Id}
                    cardData={element}
                    onPress={() =>
                      this.props.navigation.navigate("Case", { id: element.Id })
                    }
                  />
                ))}
              </ScrollView>
            </View>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#282b28"
  },
  loadingContaier: {
    justifyContent: "center"
  },
  listContainer: {
    paddingBottom: 15
  }

});