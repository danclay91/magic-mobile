/************************************************************
 * 
 * appContainer serves as the root component for entire application. 
 * It holds the primary state as well as most functions. 
 * It passes functions and state down to child components.
 * 
 ************************************************************/

import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    AppState,
    AsyncStorage,
} from 'react-native'

import PlayerOptions from '../playerOptions'

import PlayerHolder from '../playerHolder'
//TODO: Rename this. It is too ambiguous. 
import Edit from '../modals/editModal.js'
import LifeTotalBox from '../lifeTotalBox'
import GameBar from '../gameOptions'
import CounterContainer from './counterContainer'
// These two counter types could likely be reduced to one. 
import TokenCounters from '../tokenCounters'
import BasicCounters from '../basicCounters'
import PlayerNameModal from '../modals/playerModal'
import EditCounterModal from '../modals/editCounterModal'
import EditPlayerModal from '../modals/editPlayerModal'
import CoinRoller from '../numberGenerators'
import ModalMR from '../modals/modalMR'
import Player from '../../js/player';
import CounterOptions from '../counterOptions'
import BottomContainer from './bottomContainer'
import SetLifeModal from '../modals/setLifeModal'
import Button from '../playerButton'


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

        var defaultPlayer1 = Player("Fred", 20, null, 0);
        var defaultPlayer2 = Player("Daryll", 20, null, 1);

        this.state = {
            data: [
                defaultPlayer1, defaultPlayer2
            ],
            //TODO: Put all settings in one object, or put all data into one object.
            counterIndex: 0,
            counterMode: 1,
            selectedKey: 1,
            editModalVisible: false,
            backgroundModalVisible: false,
            playerNameModalVisible: false,
            editCounterModalVisible: false,
            coinRollerVisible: true,
            settingsContainerVisible: false,
            editPlayerModalVisible: false,
            lifeModalVisible: false,
            bottomComponent: 'COUNTER_OPTIONS',
            settings: {
                defaultLife: 20,
            }
        }
    }

    /**
     * Add event listener to AppState to save or load data. 
     */
    componentWillMount() {
        AppState.addEventListener('change', this._handleStateChange);
    }

    /**
     * Remove event listener when app is closed. 
     */
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleStateChange);
    }

    /**
     * Handle appState changes by saving or loading data. 
     */
    _handleStateChange = (currentAppState) => {

        //If appState change was to 'active' then load data. 
        if (currentAppState == 'active') {
            AsyncStorage.getItem('dataKey').then((data) => {
                this.setState({ 'data': JSON.parse(data) })
            }).done();
        }
        //If appState changed to 'inactive' or 'background' then save data. 
        else {
            AsyncStorage.setItem('dataKey',JSON.stringify(this.state.data)); 
        }
    }

    /**
     * Used to set which component is being rendered at bottom of screen.
     */
    setBottomComponent = (_bottomComponent) =>{ 
        this.setState({bottomComponent: _bottomComponent})
    }

    /**
     * Used to open coin roller. 
     */
    setCoinRollerVisible = (visible) => {
        if (visible == null) {
            this.setState({
                coinRollerVisible: !this.state.coinRollerVisible
            })
        }
        else {
            this.setState({
                coinRollerVisible: visible
            })
        }
    }

    /** 
     * Used to open Settings button.
     */
    setSettingsVisible = () => {
        this.setState({
            settingsContainerVisible: !this.state.settingsContainerVisible
        })
    }

    /**
     * Used to reduce a counters value by 1. 
     */
    minusCounterValue = (index) => {
        data = this.state.data;

        data[this.state.selectedKey].counters[index].value--;

        this.setState({
            data: data,
        })
    }

    /**
    * Used to reduce a counters value by 1. 
    */
    plusCounterValue = (index) => {
        data = this.state.data;

        data[this.state.selectedKey].counters[index].value++;

        this.setState({
            data: data,
        })
    }

    /**
     * Resets all player life to 0. 
     */
    resetLife = () => {
        data = this.state.data;

        data.forEach(function (player) {
            player.lifeTotal = this.state.settings.defaultLife;
        }, this);

        this.setState({
            data: data
        });
    }


    /**
     * Function to pass to PlayerView to handle decreasing life/clicking minus button. 
     */
    decrementLife = () => {
        let data = this.state.data;
        const key = this.state.selectedKey;

        if (data[key].lifeTotal > -999) {
            data[key].lifeTotal--;
        }

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

        if (data[key].lifeTotal < 999) {
            data[key].lifeTotal++;
        }

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

        var newPlayer = Player("player", 20, null, dataLength);
        data.push({ name: "player", lifeTotal: 20, id: dataLength, key: dataLength, counters:[]});

        data.push(newPlayer);

        this.setState({
            data: data,
        })
    }

    /**
     *  
     */
    deletePlayer = () => {
        let data = this.state.data;
        const index = data.key;
        let TKey = this.state.selectedKey;

        this.setState({
            selectedKey: 0,
        })

        data.splice(TKey, 1);

        this.setState({
            data: data
        })
    }

    /**
     * Used to change player name. 
     */
    setPlayerName = (name) => {
        let data = this.state.data;

        data[this.state.selectedKey].name = name;

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

    //TODO: Reimplement this.
    setColor = (color) => {
        let data = this.state.data;
        data[this.state.selectedKey].color = color;

        this.setState({
            data: data,
        })

    }

    setEditModalVisible = (visible) => {
        this.setState({ editModalVisible: visible });
    }

    /* used by the counter itself and called on long press. opens editcountermodal
        and sets counterMode to two, rendering a single counter editor for the selected counter
    */
    singularCounterCall = (index) =>{
        this.setState({
            counterMode: 1,
            editCounterModalVisible: true,
            counterIndex: index
        })

    }
    /*used by the edit counters button to call up the editcountermodal with 
        an editor for each counter
    */
    playerCounterCall = () =>{
        this.setState({
            counterMode: 2,
            editCounterModalVisible: true,
        })

    }

    setEditCounterModalVisible = (visible, index) => {
        this.setState({
            editCounterModalVisible: visible,
        })

        if (visible && index != null) {

            this.setState({
                counterIndex: index
            })
        }
    }

    /**
     * Set whether or not the setLifeModal is visible.
     */
    setLifeModalVisible = (visible) => {
        this.setState({ lifeModalVisible: visible })
    }

    setPlayerNameModalVisible = (visible) => {
        this.setState({
            playerNameModalVisible: visible
        });
    }

    // function for adding a token counter. No opacity uses this yet.
    addToken = () => {
        let data = this.state.data;

        data[this.state.selectedKey].counters.push({
            name: "Token", type: "token", value: 1
        })

        this.setState({
            data: data
        });
    }

    // function for adding a token counter. No opacity uses this yet.
    addCounter = () => {
        let data = this.state.data;

        data[this.state.selectedKey].counters.push({
            name: "Counter", type: "counter", value: 1
        })

        this.setState({
            data: data
        });
    }

    deleteCounter = (index) => {
        let data = this.state.data;
        data[this.state.selectedKey].counters[index]--;

        this.setState({
            data: data
        })
    }

    editCounterName = (name, index) => {
        let data = this.state.data;

        data[this.state.selectedKey].counters[index].name = name;
        this.setState({
            data: data
        })
    }

    /**
     * Used to set life total of all players. 
     */
    setLifeTotal = (value, valid) => {
        //Check if value is valid 
        if (!valid) {
            alert('Invalid value');
        } else {
            let val = parseInt(value);
            let data = this.state.data;

            for (var i = 0; i < data.length; i++) {
                data[i].lifeTotal = val;
            }

            this.setState({ data: data, lifeModalVisible: false });
        }
    }

    /**
     * Used to set visibility of editPlayerModal 
     */
    setEditPlayerModalVisible = (visible, index) => {

        this.setState({
            editPlayerModalVisible: visible,
        })

        if (visible && index != null) {

            this.setState({
                playerIndex: index
            })
        }
    }

    /**
     * Start a new game by deleting data object. 
     */
     startNewGame = () => {
         //TODO: Add a confirmation modal. 
         this.setState({
             data:[]
         })    
     }

    render() {

        //Determine which component is displayed at bottom of screen.
        let bottomComponent = () => {
            if (this.state.coinRollerVisible == true) {
                return (

                    <CounterContainer
                        data={this.state.data}
                        selectedKey={this.state.selectedKey}
                        minusCounterValue={this.minusCounterValue}
                        plusCounterValue={this.plusCounterValue}
                        singularCounterCall={this.singularCounterCall}

                    />

                )

            } else {
                return (
                    <CoinRoller />
                );
            }
        }

        let settingsContainer = () => {
            if (this.state.settingsContainerVisible == true) {
                return (
                    <GameBar
                        settingsContainerVisible={this.setSettingsVisible}
                        setLifeModalVisible={this.setLifeModalVisible}
                    />
                )
            }
            else {
                return (
                    <CounterBar
                        addToken={this.addToken}
                        addCounter={this.addCounter}
                        coinRollerVisible={this.setCoinRollerVisible}
                        settingsContainerVisible={this.setSettingsVisible}
                         />
                )
            }
        }


        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>



                <LifeTotalBox setModalVisible={this.setPlayerNameModalVisible} data={this.state.data} selectedKey={this.state.selectedKey} minus={this.decrementLife} plus={this.incrementLife} />


                <View style={{ flex: 1, backgroundColor: 'blue' }} >
                    <PlayerOptions onAddPlayer={this.addPlayer} data={this.state.data} setPlayerModalVisible={this.setPlayerNameModalVisible} />

                </View>



                <View style={{ flex: 1.50, backgroundColor: 'black' }}>
                    <PlayerHolder data={this.state.data} onSelectPlayer={this.selectPlayer} editPlayerModal={this.setPlayerNameModalVisible} />
                </View>


                <Edit editModalVisible={this.state.editModalVisible} setVis={this.setEditModalVisible} data={this.state.data} onSelectPlayer={this.selectPlayer} delete={this.deletePlayer} />

                <EditPlayerModal modalVisible={this.state.editPlayerModalVisible}
                    setModalVisible={this.setEditPlayerModalVisible}
                    setPlayerName={this.setPlayerName}
                    data={this.state.data}
                    selectedKey={this.state.selectedKey}
                    deletePlayer={this.deletePlayer}
                />

                <PlayerNameModal
                    modalVisible={this.state.playerNameModalVisible}
                    setModalVisible={this.setPlayerNameModalVisible}
                    setPlayerName={this.setPlayerName}
                    data={this.state.data}
                    selectedKey={this.state.selectedKey}
                    deletePlayer = {this.deletePlayer}
                />

                <EditCounterModal
                    modalVisible={this.state.editCounterModalVisible}
                    setModalVisible={this.setEditCounterModalVisible}
                    data={this.state.data}
                    selectedKey={this.state.selectedKey}
                    counterIndex={this.state.counterIndex}
                    deleteCounter={this.deleteCounter}
                    editCounterName={this.editCounterName}
                    counterMode = {this.state.counterMode}
                />

                <SetLifeModal
                    modalVisible={this.state.lifeModalVisible}
                    setModalVisible={this.setLifeModalVisible}
                    setLifeTotal={this.setLifeTotal}
                />

                {bottomComponent()}

                <BottomContainer
                    bottomComponent = {this.state.bottomComponent}
                    setBottomComponent = {this.setBottomComponent}
                    addCounter = {this.addCounter}
                    coinRollerVisible = {this.setCoinRollerVisible}
                    setLifeModalVisible = {this.setLifeModalVisible}
                    startNewGame = {this.startNewGame}
                    playerCounterCall={this.playerCounterCall}
                />
            </View>
        )
    }
}




