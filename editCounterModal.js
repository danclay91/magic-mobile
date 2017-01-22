import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput
} from 'react-native'



export default class EditCounterModal extends Component {


    getCounterValue(player) {
        if (player.counters.length > 0) {

            let counter = player.counters[this.props.counterIndex];
            try {
                return counter.value.toString();
            } catch (err) {
                return '';
            }
        }
    }

    getCounterName(player) {
        if (player.counters.length > 0) {

            let counter = player.counters[this.props.counterIndex];
            return counter.name;
        }
    }

    render() {

        let player = this.props.data[this.props.selectedKey];
        let index = this.props.counterIndex;

        return (

            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>
                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1, paddingTop: 20 }}>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} >
                                <Text>Name:</Text>
                                <TextInput
                                    style={{ width: 200, textAlign: 'center' }}
                                    defaultValue={this.getCounterName(player)}
                                    onChange={(text, index) => {
                                        this.props.editCounterName(text,index); 
                                    } }
                                    />
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                <Text>Value: </Text>
                                <TextInput
                                    style={{ textAlign: 'center' }}
                                    defaultValue={this.getCounterValue(player)}
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
                                    style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}
                                    >
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                                <View style={{ flex: .10 }} />
                                <TouchableOpacity
                                    style={{ flex: 1, backgroundColor: 'gray', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => this.props.setModalVisible(false)}
                                    >

                                    <Text>Done</Text>

                                </TouchableOpacity>

                                <View style={{ flex: 1 }} />
                            </View>

                        </View>

                        <View style={{ flex: 1 }} />


                    </View>




                </Modal>

            </View>
        )
    }
}

