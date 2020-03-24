import React from 'react';
import { Link } from './Router';

import { Github, Twitter, Linkedin } from 'grommet-icons';
import { Anchor, Box, Footer, Text } from 'grommet';

const Media = () => (
    <Box direction='row' gap='xxsmall' justify='center'>
        <Anchor
            a11yTitle='Follow me on Twitter'
            href='https://twitter.com/bnmounir7'
            icon={<Twitter color='#69306d' />}
        />
        <Anchor
            a11yTitle='Connect with me on Linkedin'
            href='https://www.linkedin.com/in/bnmounir/'
            icon={<Linkedin color='#69306d' />}
        />
        <Anchor
            a11yTitle='Follow me on Github'
            href='https://github.com/bnmounir'
            icon={<Github color='#69306d' />}
        />
    </Box>
);

export default () => {
    return (
        <Footer pad='large'>
            <Box align='center' direction='row' gap='xsmall'>
                <Text textAlign='center' size='xsmall'>
                    made with ❤️ and open source
                    <br />
                    <Anchor
                        color='#69306d'
                        a11yTitle='React Static'
                        href='https://github.com/react-static/react-static'
                        label='React-Static'
                    />{' '}
                    +{' '}
                    <Anchor
                        color='#69306d'
                        a11yTitle='Grommet'
                        href='https://v2.grommet.io/'
                        label='Grommet'
                    />{' '}
                    +{' '}
                    <Anchor
                        color='#69306d'
                        a11yTitle='unDraw'
                        href='https://undraw.co/'
                        label='unDraw'
                    />
                    <br />
                    ©Copyright
                </Text>
            </Box>

            <Anchor href='https://github.com/bnmounir/portfolio-2.0.0'>
                <Box
                    height='xxsmall'
                    width='xxsmall'
                    a11yTitle='avatar'
                    round='full'
                    // eslint-disable-next-line max-len
                    background='url(https://pbs.twimg.com/profile_images/1241544585777680384/HDLwPC3i_400x400.jpg)'
                />
            </Anchor>

            <Media />
        </Footer>
    );
};
