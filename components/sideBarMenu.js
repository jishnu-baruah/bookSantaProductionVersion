import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import { DrawerItems } from 'react-navigation-drawer';

import firebase from 'firebase';

export default class SideBarMenu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>

                <View style={styles.logOutContainer}>
                    <TouchableOpacity
                        style={styles.logOutButton}
                        onPress={() => {
                            firebase.auth().signOut()
                            this.props.navigation.navigate('WelcomeScreen')
                        }}
                    >
                        <Text> Log Out</Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    drawerItemsContainer: {
        flex: 0.8
    },
    logOutContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    logOutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',

    },
    logOutText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})