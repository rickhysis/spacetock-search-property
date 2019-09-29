import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
    const [state, setState] = useState({
        history: {},
        place: null,
        type: 0,
        search: '',
        loading: true
    });
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };