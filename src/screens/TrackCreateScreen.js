import '../_mockLocation';

import React, { useContext, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import { FontAwesome } from '@expo/vector-icons'; 
const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);
    const [err] = useLocation(isFocused || state.recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text>:null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus-circle" size={24} color="black" />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);