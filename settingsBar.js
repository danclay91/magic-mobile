import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';
export default class SettingsBar extends Component {


    render() {

        return (
            <View style={{
                flex: .75,
                flexDirection: 'row',
                backgroundColor: '#babdc1',
                borderWidth: 2,
                borderLeftWidth: 1,

                borderColor: 'black'
            }}>






                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="contrast" size={25} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="die-six" size={25} />
                    </View>



                </TouchableOpacity>


                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Icon name="heartbeat" size={25} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="page-multiple" size={25} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="paint-bucket" size={25} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="refresh" size={25} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <FounIcon name="widget" size={25} />
                    </View>
                </TouchableOpacity>



            </View>
        )
    }
}