import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Colors from '../assets/colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const MyTextInput = ({placeHolder, defaultValue}) => {

    const [myText, setMyText] = useState(defaultValue);

    return (
        <TextInput
            value={myText}
            onChangeText={text => setMyText(text)}
            autoCorrect={false}
            autoCompleteType={'off'}
            placeholder={placeHolder}
            style={styles.txtInput}
        />
    );

};

export default MyTextInput;

const styles = StyleSheet.create({

    txtInput: {
        borderColor: Colors.theme2,
        borderWidth: 1,
        borderRadius: wp('2%'),
        marginHorizontal: wp('3%'),
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('2%'),
        color: Colors.theme2,
    },

});
