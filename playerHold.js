import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
import Button from './playerButton.js'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';


export default class Hold extends Component {



    render() {
        let playerButtons = () => {
            let allPlayers = this.props.data.map((_player, index) => {
                return (
                    <Button onSelectPlayer={this.props.onSelectPlayer} data={this.props.data} key={index} id={index} player={_player} />
                )
            })
            return allPlayers;
        }
        return (
            <View style={{ flex: 2, backgroundColor: '#325182' }}>
                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.addPlayer} onPress={this.props.onAddPlayer}>
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <FounIcon name="torsos-all" size={25} />
                        </View>
                        <Text style={{ color: 'black', textAlign: 'center' }}>Add Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editPlayer} onPress={() => this.props.openEdit()}>

                        <View style={{ alignItems: 'center', justifyContent: 'center',}}>
                            <Icon name="pencil-square-o" size={25} />
                        </View>
                        <Text style={{ color: 'black', textAlign: 'center' }}>Edit Players</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.playerContainer}>
                    <ScrollView horizontal={true}>
                        {playerButtons()}
                    </ScrollView>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    playerContainer: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    settingsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    addPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderLeftWidth: 2,
        borderRightWidth: 1,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'black'

    },
    editPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderTopWidth: 2,
        borderColor: 'black'
    }
});