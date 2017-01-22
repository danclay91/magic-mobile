import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'

import TokenCounters from './tokenCounters'
import BasicCounters from './basicCounters'

export default class CounterContainer extends Component {
    render() {
        return (
            <View style={{
                flex: 5.25,
                backgroundColor: '#505256',
                borderWidth: 0,
                borderColor: 'black',
                borderBottomWidth: 0
            }}>

                <ScrollView>
                    <TokenCounters />
                    <BasicCounters />
                    <TokenCounters />
                    <BasicCounters />
                    <TokenCounters />
                </ScrollView>

            </View>
        )
    }
}