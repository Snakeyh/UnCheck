import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import LoginButton from "./Button/LoginButton";
import LoginInput from './Input/Login';
import CaseCard from "./Cards/CaseCard";
import DetailedCaseCard from "./Cards/DetailedCaseCard";
import MapButton from "./Button/MapButton";
import AreaCard from "./Cards/AreaCard";
import MapCard from "./Cards/MapCard";
import LottieView from 'lottie-react-native';
import {Animated, Easing} from "react-native";
import BasicExample from './Animations/ani'

storiesOf("Animations", module)
    .add("Test Animation", () => (
        <View style={{flex: 1, backgroundColor: "black"}}>
        <BasicExample/>
        </View>
    ));


storiesOf("Button", module)
    .add("Login", () => (
        <View style={{flex: 1}}>
            <LoginButton onPress={() => console.warn("Log me in plz!")}/>
        </View>
    ))
    .add("Login"), () =>(
        <Text>Hello</Text>
    );

storiesOf('Button', module)
    .add('Login', () => (
        <View style={{flex: 1}}>
            <LoginButton onPress={() => console.warn("Log me in plz!")}/>
        </View>
    ))
    .add('MapButton', () => (
        <View>
            <MapButton onPress = {() => console.warn("Pressed")} icon = {"my-location"}/>
        </View>
    ));

storiesOf("Inputs", module)
    .add("MailInput", () => (
        <ScrollView style={{flex: 1, paddingTop: 24, backgroundColor: "#282b28"}}>
            <LoginInput/>
        </ScrollView>
    ));

storiesOf("Cards", module)
    .add("Case Card", () => (
        <ScrollView style={{backgroundColor: "#282b28", flex: 1}}>
            <CaseCard cardData={card}/>
        </ScrollView>
    ))
    .add("Detailed Case Card", () => (
        <View style={{backgroundColor: "#282b28", flex: 1}}>
            <DetailedCaseCard cardData={card}/>
        </View>
    ))
    .add("Area Card", () => (

        <View style={{backgroundColor: "#282b28", flex: 1}}>
            <AreaCard cardData={card} disabled={false} onPress={() => console.warn("Pressed")}/>
            <AreaCard cardData={card} disabled={true} onPress={() => console.warn("Pressed")}/>
        </View>

    ))
    .add("Full Detailed View Example", () => (

        <ScrollView style={{backgroundColor: "#282b28", flex: 1}}>
            <DetailedCaseCard cardData={card}/>
            <MapCard/>
            <AreaCard cardData={card} disabled={false} onPress={() => console.warn("Pressed")}/>
            <AreaCard cardData={card} disabled={false} onPress={() => console.warn("Pressed")}/>
            <AreaCard cardData={card} disabled={false} onPress={() => console.warn("Pressed")}/>
        </ScrollView>

    ))
;

let card = {
    id: 20190101001,
    name: "Grävarbete Trädgårn",
    address: "Vasagatan 45",
    type: "El, Fiber, Fjärrvärme, VA",
    distance: 22,
    areaId: 1,
    areaPins: 11
};


 /*
storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
   */