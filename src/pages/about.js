import React from 'react';
import { Box, Clock, Heading, Paragraph, Image } from 'grommet';
import about from '../about.svg';

export default () => {
    return (
        <Box pad='medium'>
            <Box
                animation='fadeIn'
                direction='column'
                pad='medium'
                align='center'
            >
                <Box pad='medium'>
                    <Heading margin={{ top: 'none' }}>About</Heading>
                </Box>

                <img src={about} alt='guy on desk' />
            </Box>
            <Box
                direction='row-responsive'
                gap='large'
                justify='between'
                align='center'
                margin='large'
                elevation='xsmall'
                pad='xsmall'
                round='small'
                hoverIndicator={true}
            >
                <Box
                    height='medium'
                    width='medium'
                    justify='around'
                    align='center'
                    fill='horizontal'
                >
                    <Heading size='small'>Title</Heading>
                    <Paragraph textAlign='center'>
                        The actual breakpoint to trigger changes in the border,
                        direction, gap, margin, pad, and round.
                    </Paragraph>
                </Box>

                <Box
                    height='medium'
                    width='medium'
                    border={{
                        color: '#69306d',
                        size: 'large'
                    }}
                    round='small'
                    fill='horizontal'
                >
                    <Image
                        src='https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png'
                        fit='cover'
                    />
                </Box>
            </Box>

            <Box key='time' gap='medium'>
                <Clock type='digital' className='chromatic-ignore' />
            </Box>
        </Box>
    );
};
