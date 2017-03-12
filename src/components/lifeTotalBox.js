/*********************************************************
 * 
 * Responsible for rendering the selected player's life total 
 * as well as providing the ability to increment/decrement life. 
 * 
 * functions received from appContainer: 
 * -setPlayerNameModalVisible() 
 * -incrementLife() 
 * -decrementLife() 
 *********************************************************/

import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Component used to display player life & name. 
 * Also allows user to increase/decrease life total.
 * 
 * TODO: onLongPress of playername, open modal to change name? 
 */
export default class LifeTotalBox extends Component {

    renderMinusContainer() {
        return (
            <View style={{ flex: 3, }} >

                <TouchableOpacity onPress={this.props.minus} style={{ flex: 1 }}>

                    <View style={{ flex: 1, }} />

                    <View style={styles.leftArrow}>
                        <Icon name="chevron-left" size={25} color={'white'} />
                    </View>

                    <View style={{ flex: 1, }} />

                </TouchableOpacity>

            </View>
        )
    }

    renderPlusContainer() {
        return (
            <View style={{ flex: 3, }} >

                <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                    <View style={{ flex: 1, }} />

                    <View style={styles.rightArrow}>
                        <Icon name="chevron-right" size={25} color={'white'} />
                    </View>

                    <View style={{ flex: 1, }} />

                </TouchableOpacity>

            </View>
        )
    }

    renderLifeScore(selectedPlayer) {
        if (selectedPlayer == undefined) {
            return null;
        }

        //determine font styling based on digits of lifeTotal
        let digits = selectedPlayer.lifeTotal.toString().length;
        var selectedStyle;

        if (digits > 2) {
            selectedStyle = styles.smallLifeScore;
        } else {
            selectedStyle = styles.regularLifeScore;
        }

        return (
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={selectedStyle}>{selectedPlayer.lifeTotal}</Text>

            </View>
        )
    }

    renderPlayerName(selectedPlayer) {

        let playerName;

        if (selectedPlayer == null || selectedPlayer == undefined || selectedPlayer.name == null || selectedPlayer.name == undefined) {
            playerName = '';
        } else {
            playerName = selectedPlayer.name;
        }


        return (
            <View style={styles.nameBox}>
                <Text style={styles.nameText}>{playerName}</Text>
            </View>
        )
    }

    render() {
        // TEMPORARY FIX 
        if (this.props.data == null) {
            return (
                <View style={styles.lifeBox} >
                    <View style={styles.topContainer}>
                    </View>
                </View>
            )
        }

        selectedPlayer = this.props.data[this.props.selectedKey]

        return (

            <View style={styles.lifeBox} >
                {this.renderPlayerName(selectedPlayer)}

                <View style={styles.topContainer}>

                    {this.renderMinusContainer()}

                    {this.renderLifeScore(selectedPlayer)}

                    {this.renderPlusContainer()}

                </View>




            </View>
        )
    }
}

var styles = StyleSheet.create({

    topContainer: {
        flex: 4, flexDirection: 'row',
    },

    leftArrow: {
        alignItems: 'center',
        flex: 1
    },

    rightArrow: {
        flex: 1,

        alignItems: 'center',
    },

    lifeBox: {
        flex: 4.50,
        backgroundColor: '#3c7387',
        paddingTop: 15,
        borderColor: 'black',
        borderWidth: 10,
        borderRadius: 20

    },

    regularLifeScore: {
        fontSize: 100,
        fontFamily: 'Teko-Medium',
        color: '#FFFFFF',
    },

    smallLifeScore: {
        fontSize: 60,
        fontFamily: 'Teko-Medium',
        color: '#FFFFFF',
    },


    nameBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    nameText: {
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Teko-Medium',
        color: 'white',
    }
});