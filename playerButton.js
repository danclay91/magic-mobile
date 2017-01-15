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
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20, }}>{this.props.player.lifeTotal}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 90,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1
    },
    playerTabNames: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 0
    },


})

