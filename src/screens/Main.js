import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import MyTopBar from '../components/MyTopBar';


const Main = (props) => {

    const options = (passProps) => {
        return {
            topBar: {
                height: 0,
            },

        };
    };

    return (
        <View style={styles.mainContainer}>
            <Text>Main</Text>
        </View>

    );
};

Main.options = () => {
    return(
        MyTopBar('Main')
    )
};

export default Main;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
