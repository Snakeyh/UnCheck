import React from 'react';
import { Animated, Easing, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Jakub from './AnimationsJSON/27-loading'

export default class BasicExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            speed: -1
        };
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <LottieView color={"#FFFFFF"} style={styles.animation} source={require('./AnimationsJSON/animation-w1200-h1200.json')} progress={this.state.progress}/>
        );
    }
}
const styles = {
    animation: {
        //backgroundColor: "#282b28",
        width: 56,
    }
};