import React from 'react';
import { Head } from 'react-static';
import { Box, Clock, Heading, Paragraph, Anchor, Image } from 'grommet';
import about from '../about.svg';

const aboutArray = [
    {
        title: 'Code',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                It took me about three days to build this website. (My
                quarantine's silver lining!) I had put it on the back burner
                because it had to be perfect but I came to realize that
                perfection was a big barrier in the life of an engineer, to me
                engineering is about finding clever ways to solve a problem,
                that's what I set myself to accomplish from now on. the code for
                this app is hosted on{' '}
                <Anchor href='https://github.com/bnmounir/portfolio-2.0.0'>
                    Github.
                </Anchor>
            </Paragraph>
        ),
    },
    {
        title: 'Hackathons',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                Participated in{' '}
                <Anchor
                    onClick={() =>
                        window.open('https://www.hoohacks.io/', '_blank')
                    }
                >
                    HooHacks 2020.
                </Anchor>{' '}
                My team built a Firebase serverless React Native social media
                application where people can post about scarce items that become
                available in different stores across the U.S. to help fight the
                COVID-19 pandemic.
            </Paragraph>
        ),
    },
    {
        title: 'History',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                I graduated from college with a BS in Environmental Engineering
                in 2014. But it wasn’t until 2018, after moving countries and
                exploring my options, that I realized I wanted to pursue a
                career in coding instead. At first, I tried to transfer some of
                my BS credits to get a CS degree on a fast track. Unfortunately
                that didn't work out with the colleges I was interested in. So,
                I opted for an intensive one-year coding bootcamp program in
                NYC. It started in September 2018 and I've been coding nonstop
                ever since. Over the past two years, I’ve faced a lot of
                challenges, have learned even more, and got to build some cool
                little apps along the way too.
            </Paragraph>
        ),
    },
    {
        title: 'Skills',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                My focus is to constantly improve my analytical ability to solve
                problems, and to do so there's three main areas I'm focusing;
                interpersonal skills and reasoning, tech toolkit, and ability to
                solve problems efficiently.
            </Paragraph>
        ),
    },
    {
        title: 'Extra Curricular',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                When I was in college, I worked in the restaurant industry as a
                chef. Now, I'm a Chef Volunteer instructor at City Harvest in
                New York City, where we help communities find healthier food
                options and give them basic lessons on cooking. I also love
                bouldering!
            </Paragraph>
        ),
    },
    {
        title: 'Interests & Future',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                I started with the basics, and now I’m slowly but surely
                expanding my Software Engineering skills, how to approach
                problems, and how to build my career.
                <br />
                <br />
                So here's what I'm doing:
                <br />
                I constantly try to solve and understand Data Structure and
                Algorithms.
                <br />
                And I'm building more web and mobile apps, while digging into
                system design and architecture challenges.
                <br />
                <br />
                And here's what I hope to accomplish:
                <br />
                Become an application architect and work on AI/ML integrations.
            </Paragraph>
        ),
    },

    {
        title: 'Thanks for reading about me!',
        body: (
            <Box
                round='small'
                border={{
                    color: '#69306d',
                    size: 'large',

                    side: 'all',
                }}
                pad='none'
                margin='none'
            >
                <Image
                    margin='none'
                    fit='contain'
                    src='https://d2gn4xht817m0g.cloudfront.net/p/profiles/cover_photos/background/008/606/358/8606358-66bb43e66a30eea5ea6c1e9950ebbc986de44c6a.jpg?1586870567'
                />
            </Box>
        ),
    },
];

const renderContent = () =>
    aboutArray.map((data) => (
        <Box
            a11yTitle={data.title}
            animation='fadeIn'
            gap='small'
            justify='center'
            align='center'
            margin='large'
            elevation='medium'
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
            <Head>
                <title>About</title>
            </Head>
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
