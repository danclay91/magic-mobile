import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

import SettingsBar from './settingsBar';

export default class PlayerView extends Component {

    render() {

        let selectedPlayer = this.props.data[this.props.selectedKey]



        return (
            <View style={{ flex: 6, backgroundColor: 'pink' }} >

                <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'pink' }} >



                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.minus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <Text style={styles.lifeButtons}>-</Text>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={{ flex: 1, }} />

                        <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

                        <View style={{ flex: 1, }} />

                    </View>
                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <Text style={styles.lifeButtons}>+</Text>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>



                </View>

                <View style={{ flex: .50, }} >
                    <Text style={styles.playerName}>{selectedPlayer.name}</Text>

                </View>

                <View style={{ flex: .75, backgroundColor: 'blue' }} >
                </View>


                <View style={{ flex: 4, backgroundColor: 'yellow' }} />

            </View>



        )
    }
}


var styles = StyleSheet.create({
    lifeButtons: {
        textAlign: 'center',
        fontSize: 50,
        flex: 1

    },

    playerName: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 20

    },

    lifeScore: {
        textAlign: 'center',
        fontSize: 98,
        flex: 3
    },

});