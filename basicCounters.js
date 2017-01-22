import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,


} from 'react-native'

import SettingsBar from './settingsBar';

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';



export default class BasicCounters extends Component {

    render() {
        return (
            <View style={{
                height: 56,
                backgroundColor: '#a3a7af',
                borderColor: '#babdc1',
                borderWidth: 4,
                borderRadius: 15,
                flex: 5,
                flexDirection: 'row',
                marginBottom:1,
                marginTop:.50,
                marginLeft:1,
                marginRight:1
            }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#b9bc54', borderRadius:80, marginTop:1, marginBottom:1, marginLeft:1 }}>
                <Text style={{fontSize:20, color:'white', fontFamily:'Teko-SemiBold'}}>10</Text>

                </View>

                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'  }}>
                    <Text style={{ color: 'black', fontSize:20, fontFamily:'Teko-Medium' }}>Exp Counters</Text>


                </View>

                <View style={{ flex: .50, }}>

                    <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <FounIcon name="minus" size={25} color="#fca9a9" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, }}>
                    <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <FounIcon name="plus" size={25} color="#bcdbbe" />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}