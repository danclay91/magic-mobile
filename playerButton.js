import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'



export default class Button extends Component {



    render() {

        return (
            <TouchableOpacity style={styles.playerTab} onPress={() => this.props.onSelectPlayer(this.props.id)} >
                <Text style={styles.playerTabNames}>{this.props.player.name}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 90,
        backgroundColor: '#5b7fba',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1
    },
    playerTabNames: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})

