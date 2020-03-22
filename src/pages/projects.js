import React from 'react';

import { Heading, Box, Image, Paragraph } from 'grommet';
import projects from '../projects.svg';

const projectsArray = [
    {
        title: 'Data sctructure & Front end Technology',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
        projectLink: 'https://twitter.com'
    },
    {
        title: 'Using a third party API',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
        projectLink: 'https://twitter.com'
    }
];

const ProjectBoxList = () =>
    projectsArray.map(Project => (
        <Box
            key={Project.title}
            direction='row-responsive'
            gap='large'
            justify='between'
            align='center'
            margin='large'
            elevation='xsmall'
            pad='xsmall'
            round='small'
            hoverIndicator={true}
            onClick={() => window.open(Project.projectLink, '_blank')}
        >
            <Box
                height='medium'
                width='medium'
                justify='around'
                align='center'
                fill='horizontal'
            >
                <Heading size='small'>{Project.title}</Heading>
                <Paragraph textAlign='center'>{Project.body}</Paragraph>
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
                <Image src={Project.imgUrl} fit='cover' />
            </Box>
        </Box>
    ));

export default () => (
    <Box pad='medium'>
        <Box animation='fadeIn' direction='column' pad='medium' align='center'>
            <Box pad='medium'>
                <Heading margin={{ top: 'none' }}>Projects</Heading>
            </Box>

            <img src={projects} alt='guy on desk' />
        </Box>
        {ProjectBoxList()}
    </Box>
);
