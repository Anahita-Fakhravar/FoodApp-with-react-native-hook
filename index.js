/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';

Navigation.registerComponent(`Login`, () => Login);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Login',
            },
        },
    });
});
