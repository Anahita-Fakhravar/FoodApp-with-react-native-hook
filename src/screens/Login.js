import React from 'react';
import {View, StyleSheet, Text, Image, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import Colors from '../assets/colors';
import Strings from '../assets/strings';
import MyTextInput from '../components/MyTextInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyBtn from '../components/MyBtn';
import {Navigation} from 'react-native-navigation';
import {Logo} from '../components/ConstValues';

const Login = (props) => {

    console.log('props ana',props);

    const keyboardVerticalOffset = Platform.OS === 'ios' ? hp('20%') : -hp('20%');

    return (
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}
                              style={styles.mainContainer}>

            <Image style={styles.img} source={Logo}/>

            <Text style={styles.txt}>{Strings.EnterName}</Text>

            <MyTextInput placeHolder={Strings.EnterNameHint} defaultValue={''}/>

            <MyBtn OnBtnPress={() =>Navigation.push(props.componentId, {component: {
                    name: 'myMain',
                }})}/>

        </KeyboardAvoidingView>

    );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.theme1,
        justifyContent: 'flex-start',
    },
    txt: {
        marginBottom: hp('2%'),
        marginLeft: wp('4%'),
        color: Colors.theme2,
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    img: {
        width: wp('50%'),
        height: hp('50%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});
