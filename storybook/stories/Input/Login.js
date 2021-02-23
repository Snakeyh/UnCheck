import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Hideo from './InputEffect/Hideo';

export default class TextInputEffectsExample extends Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={[styles.card2, { backgroundColor: '#282b28' }]}>
                    <Hideo
                        label={'Hello'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#282b28'}
                        iconBackgroundColor={'#EA6E34'}
                        inputStyle={{ color: '#464949' }}
                        iconSize={30}
                        placeholder={'Email'}
                    />
                    <Hideo
                        style={styles.input}
                        iconClass={FontAwesomeIcon}
                        iconName={'key'}
                        iconColor={'#282b28'}
                        iconBackgroundColor={'#EA6E34'}
                        inputStyle={{ color: '#464949' }}
                        placeholder={'Lösenord'}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 0,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
    }
};