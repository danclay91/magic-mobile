import React, { Component } from 'react';
import {
    View
} from 'react-native'
import Hold from './playerHold'
export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style={{ flex: 6, backgroundColor: 'blue' }} />
                <Hold />
            </View>
        );
    }
}