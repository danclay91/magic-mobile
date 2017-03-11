import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native'
export default class PlayerName extends Component {

    render() {
        if (this.props.data[this.props.selectedKey] == undefined) {
            return null;
        }
        let playerName = this.props.data[this.props.selectedKey].name;

        return (

            <KeyboardAvoidingView>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                >
                    <View style={{
                        marginLeft: 10, marginRight: 10, height: Dimensions.get('window').height * .3,
                        width: Dimensions.get('window').width,
                    }}>


                        <View style={{ flex: 1, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 20, borderRadius: 24, borderColor: 'white', alignItems: 'center' }}>

                            <View style={{ flex: 1 }} >
                                <Text style={{ fontFamily: 'Teko-Medium', fontSize: 25 }}>Player Name</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                                <TextInput style={{ width: 200, borderColor: 'white', borderWidth: 1, color: 'white', alignItems: 'center', justifyContent: 'center' }}
                                    onChangeText={(text) => this.props.setPlayerName(text)}
                                    value={playerName}
                                />

                            </View>

                            <View style={{ flex: 1, }} />
                            <View style={{ flex: 1, flexDirection:'row' }} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{ marginBottom: 30, height: 50, width: 100, backgroundColor: '#bcdbbe', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => this.props.setModalVisible(false)}
                                    >

                                        <Text style={{ fontFamily: 'Teko-Medium' }}>Done</Text>

                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{ marginBottom: 30, height: 50, width: 100, backgroundColor: '#fca9a9', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => {
                                            this.props.setModalVisible(false)
                                            this.props.deletePlayer()
                                            }}
                                    >

                                        <Text style={{ fontFamily: 'Teko-Medium' }}>Delete</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>

        )
    }
}

