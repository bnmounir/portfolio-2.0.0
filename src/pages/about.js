import React from 'react';
import { Box, Clock, Heading, Paragraph, Anchor } from 'grommet';
import about from '../about.svg';

const aboutArray = [
    {
        title: 'Code',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                It took me about 3 days to build this website (quarantine has
                its ups I guess!), I put it on the the back burner for a while
                as the whole portfolio website can be tricky if you ask me, I
                tried using DivJoy a couple of weeks back (today is 03/22/20).
                <Anchor href='https://divjoy.com/'>DivJoy</Anchor> was featured
                on Product Hunt at the time, and it got me curious, it's pretty
                cool but it's very young still. the code for this app is hosted
                on{' '}
                <Anchor href='https://github.com/bnmounir/portfolio-2.0.0'>
                    Github.
                </Anchor>
            </Paragraph>
        )
    },
    {
        title: 'History',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                Dedication to coding as career started in 2018, at first I
                wanted to try and transfer some of my previous college degree
                credits (BS Environmental Engineering) and get a CS degree in a
                short amount of time. That didn't work with the colleges I
                applied to, so I opted for a time saver program, I ended up
                going to a year long coding bootcamp in NYC that started in
                september 2018 I've been coding none stop since, faced a lot of
                challenges, learned a lot and got to build some cool little
                apps.
            </Paragraph>
        )
    },
    {
        title: 'Skills',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                As far as bootcamps go they tend to be very experimental, a lot
                of trial by error and curriculum upgrades. While I was attending
                one, it felt unsettling to how little progress I was having, and
                instantly recognized the necessity of an outside source. I
                started taking several courses and tutorials online. Thats where
                I starting to build foundations in coding, using FreeCodeCamp,
                Dev.to, YouTube and Udemy to name a few, the Journey wasn't
                without bumps but the longer you persist the bigger the reward.
                <br />
                <br />
                Current Skills: HTML, CSS, Sass, JavaScript, Typescript,
                Node.JS, Express.JS, React, Redux, Serverless Apps, Server-side
                rendering, NoSQL, Redis, REST API’s, GraphQL, Testing, Web
                Analytics, Git, GitHub, Slack, Jira.
            </Paragraph>
        )
    },
    {
        title: 'Interests & Future',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                Stated with the basics, and now slowly but surely I'm getting to
                have a wider knowledge about Software Engineering, how to
                approach problems how to solve challenges.
                <br />
                <br />
                So here's What I'm Doing: constantly trying to solve and
                understand Data Structure and Algorithms. currently trying to
                learn Golang, we shall see in few weeks how that goes!
                <br />
                Mobile development: I've been trying to develope apps with React
                Native; bad idea, tried Ionic because of the new integration
                with React, it looked like it was trying too hard to look like
                React with too many abstractions I decided to go with Flutter,
                in experimental phase I think I like it better, it has a great
                performance and it is backed by Google so I'm gonna give it my
                best (wish me luck).
                <br />
                Python,{' '}
                <Anchor href='https://media1.tenor.com/images/19184526e407b1ae4c051a779816f428/tenor.gif'>
                    Why?
                </Anchor>
                .
                <br />
                <br />
                And Here's what I hope to accomplish: become an application
                architect, be involved with the whole life cycle of an app, work
                on AI/ML integrations on mobile and web apps.
            </Paragraph>
        )
    }
];

const renderContent = () =>
    aboutArray.map(data => (
        <Box
            gap='large'
            justify='center'
            align='center'
            margin='large'
            elevation='small'
            pad='large'
            round='small'
            fill='horizontal'
            key={data.title}
        >
            <Heading size='small'>{data.title}</Heading>

            {data.body}
        </Box>
    ));

export default () => {
    return (
        <Box
            pad='medium'
            animation='fadeIn'
            direction='column'
            pad='medium'
            align='center'
        >
            <Box pad='medium'>
                <Heading margin={{ top: 'none' }}>About</Heading>
            </Box>

            <img src={about} alt='guy on desk' />

            {renderContent()}
            <Box
                key='time-clock'
                direction='row-responsive'
                justify='center'
                align='center'
                key='time'
                gap='medium'
            >
                <Clock type='digital' className='chromatic-ignore' />
            </Box>
        </Box>
    );
};
