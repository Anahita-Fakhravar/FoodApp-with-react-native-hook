import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Colors from '../assets/colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Strings from '../assets/strings';

const MyBtn = ({OnBtnPress}) => {

    return (
        <TouchableOpacity style={styles.btn} onPress={OnBtnPress}>
            <Text style={styles.btnTxt}>{Strings.Submit}</Text>
        </TouchableOpacity>
    );
};

export default MyBtn;

const styles = StyleSheet.create({

    btnTxt: {
        textAlign: 'center',
        color: Colors.white,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('8%'),
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
    },
    btn: {
        marginTop: hp('4%'),
        backgroundColor: Colors.theme2,
        alignSelf: 'center',
        borderRadius: wp('2%'),
    },

});
