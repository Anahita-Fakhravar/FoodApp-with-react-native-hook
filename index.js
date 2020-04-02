/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {App} from './App'

App();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack:
                {
                    id: 'FoodApp',
                    children: [
                        {
                            component: {
                                id: 'myLoginId',
                                name: 'myLogin',
                                options: {
                                    topBar: {
                                        visible: false,
                                        height: 0,
                                    },
                                }
                            }
                        },

                    ],

                },
        },
    });
});
