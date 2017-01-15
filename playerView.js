import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet

} from 'react-native'





export default class PlayerView extends Component {




    render() {
        return (
            <View style={{ flex: 6, backgroundColor: 'blue' }} >

                <View style={{ flex: 1, backgroundColor: 'white' }} >
                    <Text style={styles.playerName}>Player Name</Text>

                </View>

                <View style={{ flex: 6, flexDirection: 'row', backgroundColor: 'orange' }} >

                    <View style={{ flex: 1, backgroundColor: 'red' }} >

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'yellow' }} >

                            <TouchableOpacity onPress={_onPressButton} style={{ flex: 1, backgroundColor: 'red' }}>
                                <Text style={styles.lifeButtons}>-</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                    </View>

                    <View style={{ flex: 2, backgroundColor: 'pink' }} >

                        <Text style={styles.lifeScore}>40</Text>

                    </View>


                    <View style={{ flex: 1, backgroundColor: 'green' }} >

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'yellow' }} >

                            <TouchableOpacity style={{ flex: 1, backgroundColor: 'green' }}>
                                <Text style={styles.lifeButtons}>+</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, backgroundColor: 'orange' }} >

                        </View>

                    </View>

                </View>

                <View style={{ flex: 5, backgroundColor: 'blue' }} >

                </View>



            </View>

        )
    }
}



function _onPressButton() {

    alert("It Works");
}







var styles = StyleSheet.create({
    lifeButtons: {
        textAlign: 'center',
        fontSize: 50
    },

    playerName: {
        textAlign: 'center',
        marginTop: 10,
    },

    lifeScore: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 100
    },

});