import React from 'react';
import Colors from '../assets/colors';
import {TopBarRBtn} from './ConstValues'

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
                    fontWeight: 'bold'
                },
                rightButtons: [
                    {
                        icon: TopBarRBtn,
                        id: 'buttonId',
                    },
                ],
            },
        }
    );
};

