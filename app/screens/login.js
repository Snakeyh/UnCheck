import React, { Component } from "react";
import { View, Image, Dimensions, KeyboardAvoidingView } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import { TextField } from "react-native-material-textfield";
import Icon from "react-native-vector-icons/MaterialIcons";
/* 
NOTE: login is hard-coded 
          email: admin@decerno.se
          password: password
*/

export default class PasswordInputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: "visibility-off",
      password: true,
      showEmailError: false,
      showPwError: false,
      emailText: "",
      pwText: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#282b28",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    }
  };

  changePwdType = () => {
    let newState;
    if (this.state.password) {
      newState = {
        icEye: "visibility",
        password: false
      };
    } else {
      newState = {
        icEye: "visibility-off",
        password: true
      };
    }

    // set new state value
    this.setState(newState);
  };

  submit = () => {
    if (this.state.emailText === "admin@decerno.se") {
      if (this.state.pwText === "password") {
        this.props.navigation.navigate("List");
      } else {
        this.setState({ showPwError: true });
      }
    } else {
      this.setState({ showEmailError: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="-100" enabled>
        <View style={styles.content}>
          <Image
            source={require("../theme/images/LogoWithText.png")}
            resizeMode={"contain"}
            style={styles.image}
          />

          <View>
            <TextField
              value={this.state.emailText}
              onChangeText={emailText => this.setState({ emailText })}
              label={"Email"}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              tintColor={"#ea6e34"}
              textColor={"#FFFFFF"}
              baseColor={"#FFFFFF"}
              error={this.state.showEmailError ? "Emailadressen är fel" : ""}
            />
          </View>
          <View>
            <TextField
              onChangeText={pwText => this.setState({ pwText })}
              value={this.state.pwText}
              clearTextOnFocus={true}
              label={"Lösenord"}
              tintColor={"#ea6e34"}
              textColor={"#FFFFFF"}
              baseColor={"#FFFFFF"}
              secureTextEntry={this.state.password}
              error={this.state.showPwError ? "Lösenordet är fel" : ""}
            />
            <Icon
              style={styles.icon}
              name={this.state.icEye}
              size={25}
              color={"#FFFFFF"}
              onPress={this.changePwdType}
            />
          </View>
          <RaisedTextButton
            onPress={this.submit}
            style={styles.loginButton}
            title={"Logga in"}
            color={"#ea6e34"}
            titleColor={"#000000"}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#282b28"
  },
  content: {
    margin: 20,
    marginTop: -200
  },
  image: {
    height: 200,
    width: "100%"
    //alignSelf: "center",
  },
  icon: {
    position: "absolute",
    top: 33,
    right: 0
  },
  loginButton: {
    height: 50,
    marginTop: 20
  }
};
