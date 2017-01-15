import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingsBar extends Component {


    render() {

        return (
            <View style={{ flex: .75, flexDirection: 'row', backgroundColor: 'gray', borderLeftWidth: 2, borderTopWidth: 2, borderRightWidth: 2 }}>
                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
                        <Icon name="refresh" size={25} color="white" />
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 1,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
                        <Icon name="th" size={25} color="white" />
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 5 }} />
            </View>
        )
    }
}