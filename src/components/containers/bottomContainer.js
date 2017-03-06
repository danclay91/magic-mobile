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
        alert(this.props.bottomComponent)
        if (this.props.bottomComponent == 'COUNTER_OPTIONS') {
            return (
                <CounterOptions
                    setBottomComponent={this.props.setBottomComponent}
                />
            )
        } else {
            return (
                <GameOptions
                    setBottomComponent={this.props.setBottomComponent}
                />
            )
        }
    }
}