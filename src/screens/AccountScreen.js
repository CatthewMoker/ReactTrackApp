import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons'; 

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
    <SafeAreaView forceInset={{ top:'always' }}>
        <Text style={{ fontSize:48 }}>Account Screen</Text>
        <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Ionicons name="settings" size={24} color="black" />
}

const styles = StyleSheet.create({});

export default AccountScreen;