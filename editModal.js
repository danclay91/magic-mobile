import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

export default class ModalExample extends Component {
    constructor (props){
        super(props)
    }
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View >
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {this.props.setModalVisible(false)}}>
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

        

          </View>
         </View>
         <TouchableOpacity>

         </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}