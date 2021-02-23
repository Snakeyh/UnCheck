import React, { Component } from "react";

//Apollo
import { ApolloProvider } from "react-apollo";
import client from "./services/apollo";

import AppContainer from "./navigation";
import SplashScreen from "react-native-splash-screen";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
