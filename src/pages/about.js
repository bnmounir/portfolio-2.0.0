import React from 'react';
import { Head } from 'react-static';
import { Box, Clock, Heading, Paragraph, Anchor } from 'grommet';
import about from '../about.svg';

const aboutArray = [
    {
        title: 'Code',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                It took me about three days to build this website. (Quarantine
                has a silver lining, I guess!) I had put it on the back burner
                for a while because building a portfolio website can be somewhat
                tricky. I started out using DivJoy a couple of weeks back (today
                is 03/22/20). <Anchor href='https://divjoy.com/'>DivJoy</Anchor>{' '}
                was featured on Product Hunt at the time, and it got me curious.
                It's pretty cool, but it's also still really young. I decided to
                go with React Static because it felt more intuitive. Last but
                not least, the code for this app is hosted on{' '}
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
                I graduated from college with a BS in Environmental Engineering
                in 2014. But it wasn’t until 2018, after moving countries and
                exploring my options, that I realized I wanted to pursue a
                career in coding instead. At first, I tried to transfer some of
                my BS credits to get a CS degree on a fast track. Unfortunately
                that didn't work out with the colleges I was interested in. So,
                I opted for an intensive one-year coding bootcamp program in
                NYC. It started in September 2018 and I've been coding nonstop
                ever since. Over the past two years, I’ve faced a lot of
                challenges, have learned even more and got to build some cool
                little apps along the way too.
            </Paragraph>
        )
    },
    {
        title: 'Skills',
        body: (
            <Paragraph size='large' textAlign='center' fill>
                I found that Bootcamps tend to be very experimental—a lot of
                trial by error and frequent curriculum updates. While I was a
                student, it felt unsettling to see how little progress our class
                was making. I quickly recognized the need of an additional
                outside source. I started taking several courses and tutorials
                online to supplement the Bootcamp. I used FreeCodeCamp, Dev.to,
                YouTube, and Udemy to name a few. These classes were where I
                started to build my foundations in coding. The journey wasn't
                without bumps, but the longer you persist the bigger the reward.
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
                I started with the basics, and now I’m slowly but surely
                expanding my Software Engineering skills, how to approach
                problems, and how to solve challenges.
                <br />
                <br />
                So here's what I'm doing:
                <br />
                I constantly try to solve and understand Data Structure and
                Algorithms.
                <br />
                I am currently trying to learn Golang. (We shall see in a few
                weeks how that goes!)
                <br />
                I've been working on developing mobile apps with React
                Native...bad idea! Then I tried Ionic because of the new
                integration with React...it looked like it was trying too hard
                to look like React. Finally, I decided to go with Flutter. Even
                though I'm just experimenting with it, I think I like it better,
                it has great performance overall and it is backed by Google. I'm
                gonna give it my best (wish me luck)!
                <br /> Python,{' '}
                <Anchor href='https://media1.tenor.com/images/19184526e407b1ae4c051a779816f428/tenor.gif'>
                    Why?
                </Anchor>
                <br />
                <br />
                And here's what I hope to accomplish:
                <br />
                Become an application architect · Be involved with the whole
                life cycle of an app · Work on AI/ML integrations on mobile and
                web apps
            </Paragraph>
        )
    }
];

const renderContent = () =>
    aboutArray.map(data => (
        <Box
            a11yTitle={data.title}
            animation='fadeIn'
            gap='large'
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
