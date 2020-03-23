import React from 'react';
import guyOnDesk from '../guyOnDesk.svg';
import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter
} from 'grommet-icons';
import { Head } from 'react-static';

import { Box, Main, Text, Heading } from 'grommet';

export default () => (
    <div style={{ textAlign: 'center' }}>
        <Head>
            <title>Moun's Portfolio</title>
        </Head>
        <Box animation='fadeIn' direction='column' pad='medium'>
            <Main
                background='light-2'
                elevation='large'
                pad='large'
                gap='large'
                round='xsmall'
                margin='small'
            >
                <Heading margin='none'>Hi!</Heading>
                <Text margin='small' size='large'>
                    I'm Mounir, Full stack developer. I'm Currently working on
                    the MERN Stack mainly (MongoDB, Express.js, React, Node.js)
                    slowly conquering new technologies.
                </Text>
            </Main>

            <img src={guyOnDesk} alt='guy on desk' />
        </Box>
    </div>
);
