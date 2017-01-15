import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView

} from 'react-native'

import SettingsBar from './settingsBar';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TokenCounters extends Component {

    render() {
        return (
            <View style={{
                height: 56,
                backgroundColor: '#d0d5dd',
                borderColor: 'black',
                borderWidth: 1,
                flex: 5,
                flexDirection: 'row'
            }}>
                <View style={{ flex: 2, backgroundColor: 'red' }}>


                </View>

                <View style={{ flex: 2, backgroundColor: 'blue' }}>


                </View>

                <View style={{ flex: .50, backgroundColor: 'green' }}>


                </View>

                <View style={{ flex: .50, backgroundColor: 'yellow' }}>


                </View>
            </View>
        )
    }
}