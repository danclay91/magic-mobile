import React, { Component } from 'react'

import {
    View,
    TouchableOpacity,
    Text,
    Modal,
    Image,
    StyleSheet
} from 'react-native'

export default class backgroundModal extends Component {

    getIconStyle(color) {
        let player = this.props.data[this.props.selectedKey];
        //return (player.color == color) ? styles.manaIconSelected : styles.manaIcon;
    }


    render() {
        
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => { this.props.setModalVisible(false) } }
                >

                <View style={{ borderWidth: 1, flex: 1, marginTop: 30, marginRight: 30, marginLeft: 30, marginBottom: 30, paddingLeft: 10, paddingRight: 10, backgroundColor: 'white', paddingBottom: 20 }}>

                    <View style={{ flex: 1, }} />

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.props.deletePlayer}>
                            <Image
                                source={require("./resource/mtg-white.png")}
                                style={this.getIconStyle('w')}
                                />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity onPress={()=>this.props.setColor('g')}>
                                <Image
                                    source={require('./resource/mtg-green.png')}
                                    style={this.getIconStyle('g')}
                                    />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity onPress={()=>this.props.setColor('u')}>
                                <Image
                                    source={require('./resource/mtg-blue.png')}
                                    style={this.getIconStyle('u')}
                                    />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.setColor('r')}>
                                <Image
                                    source={require('./resource/mtg-red.png')}
                                    style={this.getIconStyle('r')}
                                    />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.setColor('b')}>
                                <Image
                                    source={require('./resource/mtg-black.png')}
                                    style={this.getIconStyle('b')}
                                    />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flex: 1 }} />

                </View>


            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    manaIcon: {
        height: 100,
        width: 100,
    },
    manaIconSelected:{
        height: 100, 
        width: 100,
        opacity: .5, 
    }
})