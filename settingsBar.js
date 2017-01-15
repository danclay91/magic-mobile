import React, { Component} from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class SettingsBar extends Component{ 


    render(){
        
        return(
            <View style={{flex:1, flexDirection: 'row', backgroundColor:'gray'}}>
                <TouchableOpacity onPress={this.props.resetLife} style={{flex:1, backgroundColor:'white'}}>
                    <Text>Reset Life</Text>
                </TouchableOpacity>
                
                <View style={{flex:5}}/>
            </View>
        )
    }
}