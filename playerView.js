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
            <View style={{ flex: 6, backgroundColor: 'blue' }} >

                <View style={{ flex: 1, backgroundColor: 'white' }} >
                    <Text style={styles.playerName}>{selectedPlayer.name}</Text>

                </View>

                <View style={{ flex: 6, flexDirection: 'row', backgroundColor: 'orange' }} >

                    <View style={{ flex: 1, backgroundColor: 'red' }} >

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'yellow' }} >

                            <TouchableOpacity onPress={this.props.minus} style={{ flex: 1, backgroundColor: 'red' }}>
                                <Text style={styles.lifeButtons}>-</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                    </View>

                    <View style={{ flex: 2, backgroundColor: 'pink' }} >

                        <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

                    </View>


                    <View style={{ flex: 1, backgroundColor: 'green' }} >

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'yellow' }} >

                            <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, backgroundColor: 'green' }}>
                                <Text style={styles.lifeButtons}>+</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                    </View>

                </View>

                <View style={{ flex: 5, backgroundColor: 'blue' }} >
                    
                    <SettingsBar resetLife={this.props.resetLife}/>
                    <View style={{flex:4}}/>

                </View>



            </View>

        )
    }
}










var styles = StyleSheet.create({
    lifeButtons: {
        textAlign: 'center',
        fontSize: 50
    },

    playerName: {
        textAlign: 'center',
        marginTop: 10,
    },

    lifeScore: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 100
    },

});