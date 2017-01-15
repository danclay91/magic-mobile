import React, { Component } from 'react'
import {
    View
} from 'react-native'

import PlayerView from './playerView';

export default class App extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }} >

                <PlayerView />



                <View style={{ flex: 1, backgroundColor: 'green' }} />

            </View>

        )
    }

}
