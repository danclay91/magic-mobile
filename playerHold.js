import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
import Button from './playerButton.js'

export default class Hold extends Component {

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
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <View style ={styles.settingsContainer}>
                 <TouchableOpacity style={styles.addPlayer} onPress={this.props.onAddPlayer}>
                    <Text style ={{color: 'red'}}>AddPlayer</Text>
                 </TouchableOpacity>
                  <TouchableOpacity style={styles.editPlayer} onPress={()=>this.props.openEdit()}>
                  <Text>EditPlayer</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style = {styles.playerContainer} horizontal={true}>
                   {playerButtons()}
                </ScrollView> 
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
    settingsContainer:{
        flex:1,
        flexDirection: 'row'
    },
    addPlayer: {
        flex: 1,
        backgroundColor: 'black'
    },
    editPlayer:{
        flex: 1,
        backgroundColor: 'yellow'
    }
});