import React from 'react';
import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import {GlobalProvider} from './src/context/GlobalContext'

export const App = () => {

    Navigation.registerComponent(`myLogin`, () => (props) => (

        <GlobalProvider>
            <Login {...props} />
        </GlobalProvider>

    ), () => Login);
    Navigation.registerComponent(`myMain`, () => (props) => (

        <GlobalProvider>
            <Main {...props} />
        </GlobalProvider>

    ), () => Main);

};
