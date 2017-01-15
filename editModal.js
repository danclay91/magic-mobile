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
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {this.props.setModalVisible(false)}}>
         <View style={{marginRight:50, marginBottom:50, marginLeft:50 ,flex:1,backgroundColor:'white',marginTop: 50}}>
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