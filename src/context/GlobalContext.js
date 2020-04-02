import React from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {


    return <GlobalContext.Provider rasoul={20}>
        {children}
    </GlobalContext.Provider>;
};

export default GlobalContext;
