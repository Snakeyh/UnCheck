import React, { Component } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import StyleSheet from "../utils/DynamicStyleSheet";
import AreaCard from "../components/AreaCard";
import DetailedCaseCard from "../components/DetailedCaseCard";
import MapCard from "../components/MapCard";

import { SHOW_AREAS } from "../../index";

import HeaderImage from "../components/HeaderImage";

import client from "../services/apollo";
import gql from "graphql-tag";

export default class caseView extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#282b28",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",

    headerTitle: <HeaderImage />,
    headerRight: <View />
  };

  getQuery = id => gql`
  {
    case(Id: ${id}) {
      Id
      Number
      Name
      StreetAddress
      SiteContactName
      SiteContactPhone
      AnswerContactValue
      StartDate
      EndDate
      ExcavatingDepth
      caseGeometry {
        Geometry {
          points {
            latitude
            longitude
          }
          boundingBox {
            latitude
            longitude
          }
          waterFeatures {
            features {
              geometry {
                coordinates {
                  latitude
                  longitude
                }
              }
            }
          }
          fiberUnsafeFeatures {
            features {
              geometry {
                coordinates {
                  latitude
                  longitude
                }
              }
            }
          }
          fiberSafeFeatures {
            features {
              geometry {
                coordinates {
                  latitude
                  longitude
                }
              }
            }
          }
        }
      }
    }
  }
`;

  constructor(props) {
    super(props);
    this.state = {
      caseData: null
    };
  }
  componentWillMount() {
    id = this.props.navigation.getParam("id");
    query = this.getQuery(id);
    client.query({ query }).then(res =>
      this.setState({
        caseData: res.data.case
      })
    );
  }

  render() {
    return this.state.caseData == null ? (
      <View style={[styles.mainContainer, styles.loadingContaier]}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    ) : (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollContainer}>
          <DetailedCaseCard cardData={this.state.caseData} />
          <MapCard
            caseData={this.state.caseData}
            onPress={() =>
              this.props.navigation.navigate("Map", {
                caseData: this.state.caseData
              })
            }
          />
          {SHOW_AREAS
            ? this.state.caseData.caseGeometry.map((element, i) => (
                <AreaCard
                  key={i}
                  areaId={i + 1}
                  cardData={element}
                  onPress={() => console.warn("Pressed")}
                />
              ))
            : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#282b28",
    paddingBottom: 12
  },
  loadingContaier: {
    justifyContent: "center"
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#282b28"
  }
});
