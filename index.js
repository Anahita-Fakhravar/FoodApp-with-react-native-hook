/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';

Navigation.registerComponent(`myLogin`, () => Login);
Navigation.registerComponent(`myMain`, () => Main);

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
