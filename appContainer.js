import React, { Component } from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

import PlayerView from './playerViewD'
import PlayerHolder from './playerHoldD'

/**
 * example of data --
 * 
 * data : [
 *  {name:Player 1', lifeTotal: 20, key: 0}, 
 *  {name:'Player 2, lifeTotal: 15, key: 1},
 * ]
 *
 */

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            selectedID: null,
        }
    }

    /**
     * Function to pass to PlayerView to handle decreasing life/clicking minus button. 
     */
    decrementLife = () => {
        let data = this.state.data;
        const key = this.state.selectedKey;

        data[key].lifeTotal--;

        this.setState({
            data: data,
        });
    }

    /**
     * Function to pass to PlayerView to handle increasing life/clicking plus button. 
     */
    incrementLife = () => {
        let data = this.state.data;
        const key = this.state.selectedKey;

        data[key].lifeTotal++;

        this.setState({
            data: data,
        })
    }

    addPlayer = () => {
        let data = this.state.data; 
        const dataLength = data.length; 

        data.push({name:"player", lifeTotal: 20, id: dataLength}); 

        this.setState({
            data: data, 
        })
    }

    /**
     * Function to pass to PlayerButton to handle selecting/clicking players. 
     */
    selectPlayer = (key) => {
        const data = this.state.data;

        this.setState({
            //selectedPlayer: data[key], 
            selectedKey: key,
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style={{ flex: 6, backgroundColor: 'blue' }} />

                <PlayerHolder />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
    },


})