import React, { createContext, useReducer } from 'react';
import { Root } from 'react-static';

import { GlobalStyle } from './GlobalStyle';
import { Grommet, Box } from 'grommet';
// import { hp } from 'grommet-theme-hp';
import { grommet } from 'grommet/themes';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export const ThemeContext = createContext();

const initialState = {
    themeMode: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {
                themeMode: action.data,
            };
        default:
            return initialState;
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Root>
            <GlobalStyle />
            <ThemeContext.Provider value={{ state, dispatch }}>
                <Header />
                <Grommet theme={grommet} style={{ flex: '1 1' }}>
                    <Box
                        fill
                        pad='medium'
                        background={
                            state.themeMode
                                ? 'dark-1'
                                : 'light-1' || theme.global.colors.background
                        }
                        overflow='auto'
                    >
                        <Main />
                        <Footer />
                    </Box>
                </Grommet>
            </ThemeContext.Provider>
        </Root>
    );
};
