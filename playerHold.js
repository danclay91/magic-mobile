import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Button from './playerButton.js'
import AddButton from './addPlayer.js'

export default class Hold extends Component {

    /*onPressButton(){
        alert("Button Pressed");
    }*/

    render() {
        let playerButtons = ()=> {
            let allPlayers = this.props.data.map((_player,index)=>{
                return(
                    <Button onSelectPlayer={this.props.onSelectPlayer} key={index} id={index} player={_player}/>
                )
            })
            return allPlayers;
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'green', flexDirection: 'row' }}>
                <View style = {styles.playerContainer}>
                   {playerButtons()}
                </View> 
                <TouchableOpacity style={styles.addPlayer} onPress={this.props.onAddPlayer}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerContainer:{  
        flex: 4,
        backgroundColor: 'transparent' ,
        flexDirection: 'row'
    },
    addPlayer: {
        flex: 1,
        backgroundColor: 'black'
    },
});