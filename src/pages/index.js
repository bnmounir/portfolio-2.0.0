import React from 'react';
import guyOnDesk from '../guyOnDesk.svg';

import { Head } from 'react-static';

import { Box, Main, Text, Heading, DataTable, Meter } from 'grommet';

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
                margin='medium'
            >
                <Heading margin='none'>Hi!</Heading>
                <Text margin='small' size='large'>
                    I'm Mounir, a Software Engineer. I chose this profession to
                    drive positive change at scale.
                </Text>
            </Main>

            <img src={guyOnDesk} alt='guy on desk' />
        </Box>
        <Box
            animation='fadeIn'
            direction='column'
            pad='medium'
            justify='center'
            align='center'
        >
            <Box
                animation='fadeIn'
                direction='column'
                pad='medium'
                justify='center'
                align='center'
            >
                <Heading size='small'>Skills</Heading>
            </Box>
            <DataTable
                size='medium'
                columns={[
                    {
                        property: 'name',
                        header: <Text size=''>Skill</Text>,
                        primary: true,
                    },
                    {
                        property: 'percent',
                        header: 'Level',
                        render: (datum) => (
                            <Box pad={{ vertical: 'small' }}>
                                <Meter
                                    values={[
                                        {
                                            value: datum.percent,
                                            color: `accent-${
                                                (datum.key % 4) + 1
                                            }`,
                                        },
                                    ]}
                                    thickness='small'
                                    size='medium'
                                />
                            </Box>
                        ),
                    },
                ]}
                data={[
                    { name: 'HTML', percent: 95, key: 1 },
                    { name: 'CSS', percent: 90, key: 2 },
                    { name: 'Javascript', percent: 90, key: 3 },
                    { name: 'Typescript', percent: 75, key: 4 },
                    { name: 'Python', percent: 70, key: 5 },
                    { name: 'React', percent: 77, key: 7 },
                    { name: 'Redux', percent: 77, key: 8 },
                    { name: 'Node', percent: 85, key: 9 },
                    { name: 'Express', percent: 85, key: 10 },
                    { name: 'Django', percent: 70, key: 11 },
                    { name: 'SQL', percent: 70, key: 12 },
                    { name: 'No-SQL', percent: 70, key: 13 },
                ]}
            />
        </Box>
    </div>
);
