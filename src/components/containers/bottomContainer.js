import React, { Component } from 'react'
import {
    View,
} from 'react-native'

import CounterOptions from '../counterOptions'
import GameOptions from '../gameOptions'

export default class BottomContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.bottomComponent == 'COUNTER_OPTIONS') {
            return (
                <CounterOptions
                    setBottomComponent={this.props.setBottomComponent}
                    addCounter = {this.props.addCounter}
                    coinRollerVisible = {this.props.coinRollerVisible}
                    playerCounterCall={this.props.playerCounterCall}
                />
            )
        } else {
            return (
                <GameOptions
                    setBottomComponent={this.props.setBottomComponent}
                    setLifeModalVisible = {this.props.setLifeModalVisible}
                    startNewGame = {this.props.startNewGame}
                />
            )
        }
    }
}