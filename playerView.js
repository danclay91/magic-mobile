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
import BasicCounters from './basicCounters';
import TokenCounters from './tokenCounters';
import LifeTotalBox from './lifeTotalBox';
import PlayerName from './playerName.js';


import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlayerView extends Component {

    getBackgroundColor() {
        selectedPlayer = this.props.data[this.props.selectedKey]

        var backgroundColor;

        switch (selectedPlayer.color) {
            case "r":
                backgroundColor = 'red';
                break;
            case "b":
                backgroundColor = 'black';
                break;
            case "g":
                backgroundColor = 'green';
                break;
            case 'w':
                backgroundColor = 'white';
                break;
            case "u":
                backgroundColor = 'blue';
                break;
            default:
                backgroundColor = '#7fd3e0';
                break;
        }

        return backgroundColor;
    }

    render() {

    



        return (
            <View style={styles.screenContainer}>
              
              <LifeTotalBox/>
            


                <View style={{flex:3}}>

                    <ScrollView >

                        <TokenCounters />
                        <BasicCounters />
                        <TokenCounters />
                        <BasicCounters />
                        <TokenCounters />

                    </ScrollView>

                </View>

            </View>

        )
    }
}


var styles = StyleSheet.create({

    screenContainer: {
        flex: 8,
        backgroundColor: '#3c7387'

    },


    counterBox: {
        flex: 4,
        backgroundColor: '#505256',
        borderWidth: 0,
        borderColor: 'black',
        borderBottomWidth: 0
    },



});