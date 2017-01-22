import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';

export default class AddPlayer extends Component {
    render() {
        return (
            <View style={styles.settingsContainer}>
                <TouchableOpacity style={styles.addPlayer} onPress={this.props.onAddPlayer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <FounIcon name="torsos-all" size={25} />
                    </View>
                    <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Teko-Light' }}>Add Player</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editPlayer} onPress={() => this.props.openEdit()}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <FounIcon name="results-demographics" size={25} />
                    </View>
                    <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Teko-Light' }}>Edit Players</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    settingsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    addPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderWidth: 1,
        borderTopWidth: 2,
        borderColor: 'black',
    },
    editPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderWidth: 1,
        borderTopWidth: 2,

    }
});