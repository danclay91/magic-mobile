import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'



export default class EditButton extends Component {


    render() {

        return (
            <TouchableOpacity style={styles.playerTab} onPress={() => this.props.onSelectPlayer(this.props.id)} >
                <Text style={styles.playerTabNames}>{this.props.player.name}</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Teko-Medium', flex: 1, color:'black' }}>{this.props.player.lifeTotal}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 360,
        height: 90,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth:1,
        backgroundColor:'#babdc1',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',

        
        
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
