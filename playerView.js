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

        let selectedPlayer = this.props.data[this.props.selectedKey]



        return (
            <View style={{ flex: 6, backgroundColor: '#3c7387' }} >


                <View style={{ flex: 3, flexDirection: 'row', backgroundColor: '#3c7387' }} >


                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.minus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, flex: 1 }}>
                                <Icon name="chevron-left" size={25} color={'white'}/>
                            </View>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={{ flex: 1 }}>
                        </View>


                        <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

                        <View style={{ flex: 1, }} />

                    </View>
                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, flex: 1 }}>
                                <Icon name="chevron-right" size={25} color={'white'} />
                            </View>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>



                </View>

                <View style={{ flex: .50, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Teko-Medium',
                        color:'white'
                    }}>{selectedPlayer.name}</Text>

                </View>

                <SettingsBar />


                <View style={styles.counterBox}>
                    <ScrollView >


                        <TokenCounters />
                        <BasicCounters />
                        <TokenCounters />
                        <BasicCounters />
                        <TokenCounters />
                        <BasicCounters />
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
    lifeButtons: {
        textAlign: 'center',
        fontSize: 50,
        flex: 1

    },

    playerName: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 20,
        color:'#babdc1'

    },

    lifeScore: {
        textAlign: 'center',
        fontSize: 90,
        flex: 3,
        fontFamily: 'Teko-Medium',
        color: 'white'
    },

    counterBox: {
        flex: 4,
        backgroundColor: '#505256',
        borderWidth: 0,
        borderColor: 'black',
        borderBottomWidth: 0
    },



});