import React from 'react';
import Colors from '../assets/colors';
import {TopBarRBtn, TopBarRBtnIos} from './ConstValues';
import {Platform} from 'react-native';

export default (Title) => {
    return (
        {
            topBar: {
                backButton: {
                    color: Colors.theme2,
                },
                background: {
                    color: Colors.theme1,
                },
                title: {
                    text: Title,
                    fontSize: 16,
                    color: Colors.theme2,
                    alignment: 'center',
                    fontWeight: 'bold',
                },
                rightButtons: [
                    {
                        icon: Platform.OS === 'ios' ? TopBarRBtnIos : TopBarRBtn,
                        id: 'buttonId',

                    },
                ],
            },
        }
    );
};

