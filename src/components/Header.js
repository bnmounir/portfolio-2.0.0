import React, { useState, useContext } from 'react';
import { Root, Routes } from 'react-static';

import { ThemeContext } from '../App';

import { Link } from 'components/Router';

import { Grommet, Header, Box, CheckBox } from 'grommet';

import { hp } from 'grommet-theme-hp';

export default () => {
    const { state, dispatch } = useContext(ThemeContext);
    const changeTheme = Bool => {
        dispatch({ type: 'TOGGLE', data: Bool });
    };

    return (
        <Grommet theme={hp}>
            <Header background={{ color: '#69306d' }} pad='small'>
                <Box direction='row' align='center' gap='small'>
                    <Link to='/'>Moun</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                </Box>

                <Box direction='row' align='center' gap='small'>
                    <CheckBox
                        label='Dark Mode'
                        checked={state.themeMode}
                        onChange={() => changeTheme(!state.themeMode)}
                    />
                </Box>
            </Header>
        </Grommet>
    );
};
