import React from 'react';
import {View, TextInput, StyleSheet, Text, Image} from 'react-native';
import Colors from '../assets/colors';
import Strings from '../assets/strings';

const Login = () => {

    return (
        <View style={styles.mainContainer}>

            <Image style={styles.img} source={require('../assets/icons/food.png')}/>

            <Text style={styles.txt}>{Strings.EnterName}</Text>

            <TextInput
                autoCorrect={false}
                autoCompleteType={'off'}
                placeholder={'Type your name here...'}
                style={styles.txtInput}
            />


        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.theme1,
        justifyContent: 'flex-start',

    },
    txtInput: {
        borderColor: Colors.theme2,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: Colors.theme2,
    },
    txt: {
        marginBottom: 10,
        marginLeft: 12,
        color: Colors.theme2,
        fontWeight: 'bold',
        fontSize: 16,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 90,
    },
});
