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
                elevation='large'
                pad='large'
                gap='large'
                round='xsmall'
                margin='small'
            >
                <Heading margin='none'>Hi!</Heading>
                <Text margin='small' size='large'>
                    I'm Mounir, a full stack developer. I'm currently working on
                    the MERN Stack (MongoDB, Express.js, React, Node.js) and
                    slowly conquering new technologies.
                </Text>
            </Main>

            <img src={guyOnDesk} alt='guy on desk' />
        </Box>
    </div>
);
