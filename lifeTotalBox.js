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
        return (
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

            </View>
        )
    }

    renderPlayerName(selectedPlayer) {
        return (
            <View style={styles.nameBox}>
                <TouchableOpacity
                    onLongPress={()=>this.props.setModalVisible(true)}>
                    <Text style={styles.nameText}>{selectedPlayer.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        let selectedPlayer = this.props.data[this.props.selectedKey]

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

    },

    lifeScore: {
        fontSize: 100,
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
        fontSize: 40,
        fontFamily: 'Teko-Medium',
        color: 'white',
    }
});