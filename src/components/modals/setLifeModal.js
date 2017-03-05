/**
 * 
 * Component for modal that allows user to change the life totals of all players at once. 
 * 
 */


import React, { Component } from 'react'
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import * as appStyles from '../../js/styles'

export default class SetLifeModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valid: false
        }


    }

    /**
     * Check if the desired value contains digits only.
     */
    validateValue() {
        let numbers = '0123456789'

        value = this.state.changeValue;

        if (value <= 0) {
            this.setState({ valid: false });
            return;
        }

        if (value.match(/^\d+$/)) {
            this.setState({ valid: true })
        } else {
            this.setState({ valid: false })
        }

    }

    render() {
        return (
            <View >
                <Modal
                    animationType={"slide"}
                    visible={this.props.modalVisible}
                    transparent={true}
                    onRequestClose={() => { this.props.setModalVisible(false) }}>
                    <View style={{ flex: 1, backgroundColor: appStyles.modalGrey, marginVertical: 50, marginHorizontal: 50, borderWidth: 2, }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Set Life</Text>
                            <TextInput
                                keyboardType="numeric"
                                multiline={false}
                                onChangeText={(text) => { this.setState({changeValue: text}) }}
                                onSubmitEditing={() => this.validateValue()}
                            />

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.setLifeTotal(this.state.changeValue, this.state.valid)
                                    }}
                                >
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 50, height: 50, width: 50, backgroundColor: 'blue' }}>
                                        <Text>OK</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.setModalVisible(false)}
                                >
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 50, height: 50, width: 50, backgroundColor: 'red' }}>
                                        <Text>Cancel</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

}