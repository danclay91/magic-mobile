import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

import PlayerView from './playerView'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LifeTotalBox extends Component {

    render() {

    let selectedPlayer = this.props.data[this.props.selectedKey]

        return (

            <View style={styles.lifeBox} >


                <View style={{ flex: 2, }} >

                    <TouchableOpacity onPress={this.props.minus} style={{ flex: 1, }}>

                        <View style={{ flex: 1, }} />

                        <View style={styles.lifeArrows}>
                            <Icon name="chevron-left" size={25} color={'white'} />
                        </View>

                        <View style={{ flex: 1, }} />

                    </TouchableOpacity>

                </View>
                <View>
                    <View style={{ flex: 1 }}>
                    </View>


                    <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

                    <View style={{ flex: 1, }} />

                </View>
                <View style={{ flex: 2, }} >

                    <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                        <View style={{ flex: 1, }} />

                        <View style={styles.lifeArrows}>
                            <Icon name="chevron-right" size={25} color={'white'} />
                        </View>

                        <View style={{ flex: 1, }} />

                    </TouchableOpacity>

                </View>



            </View>





        )
    }
}

var styles = StyleSheet.create({

    lifeArrows: {
       
        flex: 1
    },

    lifeBox: {
        flex: .50,
        flexDirection: 'row',
        backgroundColor: '#3c7387'

    },

    lifeScore: {
        textAlign: 'center',
        fontSize: 90,
        flex: 1,
        fontFamily: 'Teko-Medium',
        color: 'white'
    },
});