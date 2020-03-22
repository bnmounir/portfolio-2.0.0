import React, { useState } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Footer from './components/Footer';

import styled, { createGlobalStyle } from 'styled-components';

import { Grommet, Header, Box, Select } from 'grommet';
import { grommet } from 'grommet/themes';
import { hp } from 'grommet-theme-hp';

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: #F2D7EE;
  }
  a {
    text-decoration: none;
    color: #F2f2f2;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
    padding: 1rem;
`;

function App() {
    const [background, setBackground] = useState('light-1');
    return (
        <Root>
            <GlobalStyle />
            <Grommet theme={grommet}>
                <Header background={{ color: '#69306d' }} pad='small'>
                    <Box direction='row' align='center' gap='small'>
                        <Link to='/'>Moun</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                    </Box>

                    <Box direction='row' align='center' gap='small'>
                        <Select
                            plain
                            placeholder='background'
                            size='small'
                            options={['dark-1', 'light-1']}
                            value={background}
                            onChange={event => setBackground(event.option)}
                        />
                    </Box>
                </Header>
            </Grommet>
            <Grommet theme={hp} style={{ flex: '1 1' }}>
                <Box
                    fill
                    pad='medium'
                    background={background || theme.global.colors.background}
                    overflow='auto'
                >
                    <Content>
                        <React.Suspense fallback={<em>Loading...</em>}>
                            <Router>
                                <Routes path='*' />
                            </Router>
                        </React.Suspense>
                    </Content>
                    <Footer />
                </Box>
            </Grommet>
        </Root>
    );
}

export default App;
