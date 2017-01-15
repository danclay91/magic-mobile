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
            <View style={{ flex: .75, flexDirection: 'row', backgroundColor: 'gray', borderLeftWidth: 2, borderTopWidth: 2, borderRightWidth: 2 }}>
                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 3,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                        <FounIcon name="refresh" size={30} color="white" />
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 3,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                        <FounIcon name="paint-bucket" size={30} color="white" />
                    </View>
                </TouchableOpacity>

                
                 <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 3,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                        <FounIcon name="die-six" size={30} color="white" />
                    </View>
                </TouchableOpacity>

                     
                 <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 3,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                        <FounIcon name="contrast" size={30} color="white" />
                    </View>
                </TouchableOpacity>

                   <TouchableOpacity onPress={this.props.resetLife} style={{ flex: 3,  }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                        <Icon name="heartbeat" size={30} color="white" />
                    </View>
                </TouchableOpacity>


                <View style={{ flex: 5 }} />
            </View>
        )
    }
}