import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet, 
    TouchableOpacity,
    Text
} from 'react-native'



export default class Button extends Component{

    

    render(){

        return(
            <TouchableOpacity style ={{flex: 1, backgroundColor: 'purple',}}>
            <Text>{this.props.player.name}</Text>
            </TouchableOpacity>
        )
    }
}