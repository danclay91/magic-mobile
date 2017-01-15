import React, { Component } from 'react'
import {
    Text,
    Image,
    View,

} from 'react-native'

export default class LifeTotal extends Component {

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black' }} >


                <View style={{ flex: 1, backgroundColor: 'red' }} >

                </View>

                <View style={{ flex: 2, backgroundColor: 'orange' }} >

                </View>


                <View style={{ flex: 1, backgroundColor: 'green' }} >

                </View>


            </View>




        )
    }
}