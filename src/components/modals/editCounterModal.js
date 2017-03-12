/********************************************
 * 
 * Represents the modal that appears and gives user
 * the ability to edit counters. 
 * 
 ********************************************/

import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'



export default class EditCounterModal extends Component {
    getCounterValue(player, index) {
        if(player.counters == null || player.counters == undefined){
            return ''; 
        }

        if (player.counters.length > 0) {
            let counter = player.counters[index];
            try {
                return counter.value.toString();
            } catch (err) {
                return '';
            }
        }
    }

    getCounterName(player, index) {    
        if(player.counters == null || player.counters == undefined){
            return '';
        }

        if (player.counters.length > 0) {
            let counter = player.counters[index];
            return counter.name;
        }
    }

    render() {

        let player = this.props.data[this.props.selectedKey];
        let index = this.props.counterIndex;
        if (player==undefined) {
            return null;
        }
        //this function is used to map multiple counter editors for the selected player. called below in switch statement case 2
        let renderCounterEditors = ()=>{
            let counterEditor = this.props.data[this.props.selectedKey].counters.map((counter, index)=>{
                return( 
                    <View key={index}>
               
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10,}}>
                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 20, borderRadius:24, borderColor:'white'}}>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center' }} >
                                <Text style={{color:'white'}}>Name:</Text>
                                <TextInput
                                    style={{ width: 200, textAlign: 'center', color:'white' }}
                                    defaultValue={this.getCounterName(player, index)}
                                    onChangeText={(text) => {
                                        this.props.editCounterName(text, index); 
                                    } }
                                    />
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent:'center' }}>
                                <Text style={{color:'white'}}>Value: </Text>
                                <TextInput
                                    style={{ width:200, textAlign: 'center', color:'white' }}
                                    defaultValue={this.getCounterValue(player, index)}
                                    />
                            </View>

                            <View style={{ flex: 1, }} >

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.setModalVisible(false);

                                        this.props.deleteCounter(index);
                                    } }
                                    style={{ backgroundColor: '#fca9a9', flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius:8 }}
                                    >
                                    <Text style={{color:'white',fontFamily:'Teko-Medium'}}>Delete</Text>
                                </TouchableOpacity>
                                <View style={{ flex: .10 }} />
                                <TouchableOpacity
                                    style={{ flex: 1, backgroundColor: '#bcdbbe', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius:8 }}
                                    onPress={() => this.props.setModalVisible(false)}
                                    >

                                     <Text style={{fontFamily:'Teko-Medium', color:'white'}}>Done</Text>

                                </TouchableOpacity>

                                <View style={{ flex: 1 }} />
                            </View>

                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
            </View>)
            }
            )
            return counterEditor;
        }


        switch(this.props.counterMode){
        case 1: return (

            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10,}}>
                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 20, borderRadius:24, borderColor:'white'}}>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center' }} >
                                <Text style={{color:'white'}}>Name:</Text>
                                <TextInput
                                    style={{ width: 200, textAlign: 'center', color:'white' }}
                                    defaultValue={this.getCounterName(player, this.props.counterIndex)}
                                    onChangeText={(text) => {
                                        this.props.editCounterName(text, this.props.counterIndex); 
                                    } }
                                    />
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent:'center' }}>
                                <Text style={{color:'white'}}>Value: </Text>
                                <TextInput
                                    style={{ width:200, textAlign: 'center', color:'white' }}
                                    defaultValue={this.getCounterValue(player, this.props.counterIndex)}
                                    />
                            </View>

                            <View style={{ flex: 1, }} >

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.setModalVisible(false);

                                        this.props.deleteCounter(this.props.counterIndex);
                                    } }
                                    style={{ backgroundColor: '#fca9a9', flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius:8 }}
                                    >
                                    <Text style={{color:'white',fontFamily:'Teko-Medium'}}>Delete</Text>
                                </TouchableOpacity>
                                <View style={{ flex: .10 }} />
                                <TouchableOpacity
                                    style={{ flex: 1, backgroundColor: '#bcdbbe', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius:8 }}
                                    onPress={() => this.props.setModalVisible(false)}
                                    >

                                     <Text style={{fontFamily:'Teko-Medium', color:'white'}}>Done</Text>

                                </TouchableOpacity>

                                <View style={{ flex: 1 }} />
                            </View>

                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
                </Modal>
            </View>
        )
        case 2: return(
            <View>
             <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <ScrollView>
                    {renderCounterEditors()}
                    </ScrollView>
                </Modal>
            </View>
        )
        }
    }
}

