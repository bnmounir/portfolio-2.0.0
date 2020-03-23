import React, { createContext, useReducer } from 'react';
import { Root } from 'react-static';
// import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   * {
//     scroll-behavior: smooth;
//   }
//   body {
//     font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
//     Helvetica, Arial, 'Lucida Grande', sans-serif;
//     font-weight: 300;
//     font-size: 16px;
//     margin: 0;
//     padding: 0;
//     background-color: #F2D7EE;
//   }
//   a {
//     text-decoration: none;
//     color: #F2f2f2;
//     font-weight: bold;
//   }

//   img {
//     max-width: 100%;
//   }
// `;

import Footer from './components/Footer';

import { GlobalStyle } from './GlobalStyle';

import { Grommet, Box } from 'grommet';
import { hp } from 'grommet-theme-hp';

import Header from './components/Header';
import Main from './components/Main';

export const ThemeContext = createContext();

const initialState = {
    themeMode: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {
                themeMode: action.data
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
                <Grommet theme={hp} style={{ flex: '1 1' }}>
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
