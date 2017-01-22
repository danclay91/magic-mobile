import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import PlayerView from './playerView'
import PlayerHolder from './playerHold'
import Edit from './editModal.js'
import BackgroundModal from './backgroundModal'
import LifeTotalBox from './lifeTotalBox'
import PlayerName from './playerName'

/**
 * example of data --
 * 
 * data : [
 *  {name:Player 1', lifeTotal: 20, key: 0}, 
 *  {name:'Player 2, lifeTotal: 15, key: 1},
 * ]
 *
 */

/**
 * Base component which contains all other components.
 * All app data is stored as state in this component. 
 * Functions used to modify data are created here and then passed into other components as props. 
 */
export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [{name:'Fred', lifeTotal: 20, color: null, key: 0},
                   {name:'Daryll', lifeTotal: 30, color:null,  key: 1}],
            selectedKey: 1,
            modalVisible: false, 
            backgroundModalVisible: false, 
            settings:{
                defaultLife: 20, 
                
            }
        }
    }

    /**
     * 
     */
    resetLife = () =>{
        data = this.state.data; 

        data.forEach(function(player) {
            player.lifeTotal=0; 
        }, this);

        this.setState({
            data:data
        });
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

    /**
     * Function to pass to PlayerHolder to handle  
     * 
     */
    addPlayer = () => {
        let data = this.state.data; 
        const dataLength = data.length; 

        data.push({name:"player", lifeTotal: 20, id: dataLength, key: dataLength}); 

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

    setColor = (color) =>{
        let data = this.state.data; 
        data[this.state.selectedKey].color = color; 

        this.setState({
            data:data, 
        })

    }

    setModalVisible = (visible)=> {
        this.setState({modalVisible: visible});
    }

    setBackGroundModalVisible = (visible)=>{
        this.setState({backgroundModalVisible: visible}); 
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style = {{flex:4.50, backgroundColor:'red'}}>
                    <Text>lifeTotalBox</Text>
                </View>

                <View style = {{flex:1, backgroundColor: 'blue'}} >
                    <Text>addPlayer</Text> 
                </View>

                <View style = {{flex:1.50, backgroundColor: 'green'}}>
                    <Text>Player buttons </Text>
                </View>

                <View style = {{flex: 5, backgroundColor: 'pink'}}>
                    <Text>Counter Container</Text>
                </View>

                <View style = {{flex:1, backgroundColor:"blue"}}>
                    <Text>Settings Bar</Text>
                </View> 
            </View>
        )
    }
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
    },


})

/**
 * Old render return 
 * 
 *   <LifeTotalBox selectedKey={this.state.selectedKey} data={this.state.data} 
                plus={this.incrementLife} minus={this.decrementLife} resetLife={this.resetLife} openBackground={this.setBackGroundModalVisible}
                />
                <BackgroundModal data={this.state.data} selectedKey={this.state.selectedKey} modalVisible = {this.state.backgroundModalVisible} setModalVisible={this.setBackGroundModalVisible} setColor={this.setColor}/>
                <Edit modalVisible = {this.state.modalVisible} setModalVisible = {this.setModalVisible}/>
                <PlayerHolder data={this.state.data} onAddPlayer={this.addPlayer} onSelectPlayer={this.selectPlayer} openEdit={this.setModalVisible}/>
 */