import React from 'react';
import { Head } from 'react-static';

import { Heading, Box, Image, Paragraph } from 'grommet';
import projects from '../projects.svg';

const projectsArray = [
    {
        title: 'Data sctructure & Front end Technology',
        body:
            'Blockchain, Angular 2, Typescript · my final project at a coding bootcamp, the presentation slideshow is @ bit.ly/2GBMWwY',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
        projectLink: 'https://good-shawarma.netlify.com/'
    },
    {
        title: 'Authentication Flow',
        body:
            'ExpressJS, Node.js, Passport-Jwt · a full stack application showing a Token based authentication flow',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/99/1115273/b1c3a0cc0427a9fb7549df2c134f31c4-original.png',
        projectLink: 'https://auth-react-owl.netlify.com/#/'
    },

    {
        title: 'YouTube API with React',
        body: 'React, YouTube API',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057230/8c8a0b2697af65179d209a256ed5a7e3-original.png',
        projectLink: 'https://youtube-api-with-react.netlify.com/'
    },

    {
        title: 'Software as a Service',
        body:
            'React, Redux, Node.js · from an online tutorial, learned to use Stripe for payment, Google-Oauth with passportJS, react-redux, expressJS, Node and MongoDB.',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b0/1106303/11e67b59c0c57ffcc38d32ae2a393836-original.png',
        projectLink: 'https://pacific-forest-82078.herokuapp.com/'
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
        <Head>
            <title>Projects</title>
        </Head>
        <Box animation='fadeIn' direction='column' pad='medium' align='center'>
            <Box pad='medium'>
                <Heading margin={{ top: 'none' }}>Projects</Heading>
            </Box>

            <img src={projects} alt='guy on desk' />
        </Box>
        {ProjectBoxList()}
    </Box>
);
