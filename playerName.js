import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView

} from 'react-native'


export default class PlayerName extends Component {

    render() {
        return (
        
            <View style={styles.nameBox} >
                <Text style={styles.nameText}>{selectedPlayer.name}</Text>

            </View>
        )
    }
}

var styles = StyleSheet.create({

    nameBox: {
        flex: .50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Teko-Medium',
        color: 'white'
    }

})