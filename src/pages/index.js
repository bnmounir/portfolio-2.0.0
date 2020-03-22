import React from 'react';
import guyOnDesk from '../guyOnDesk.svg';
import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter
} from 'grommet-icons';

import {
    Anchor,
    Box,
    Footer,
    grommet,
    Grommet,
    Main,
    Text,
    Heading
} from 'grommet';

export default () => (
    <div style={{ textAlign: 'center' }}>
        <Box animation='fadeIn' direction='column' pad='medium'>
            <Box pad='medium'>
                <Heading margin={{ top: 'none' }}>Yo!</Heading>
            </Box>

            <img src={guyOnDesk} alt='guy on desk' />
        </Box>
        <Main background='light-2' elevation='large' pad='large' gap='large'>
            <Text margin='small' size='xsmall'>
                I'm Moun, welcome to my website
            </Text>
            <Box flex />
        </Main>
    </div>
);
