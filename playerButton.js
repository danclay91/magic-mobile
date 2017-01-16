import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'



export default class Button extends Component {

    getBackgroundColor() {
        selectedPlayer = this.props.data[this.props.id]

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
        let bgColor = this.getBackgroundColor();

        return (
            <TouchableOpacity style={styles.playerTab} onPress={() => this.props.onSelectPlayer(this.props.id)} >
                <Text style={styles.playerTabNames}>{this.props.player.name}</Text>
                <Text style={{ textAlign: 'center', fontSize: 35, fontFamily: 'Teko-Medium', flex: 1, color:'black' }}>{this.props.player.lifeTotal}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 90,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopWidth:1,
        backgroundColor:'#babdc1',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'

        
        
    },
    playerTabNames: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Teko-Light',
        fontSize: 25,
        flex:2,
        color: 'black'
    },


})

