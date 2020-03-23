import React from 'react';
import { Router } from 'components/Router';
import { Routes } from 'react-static';
import styled from 'styled-components';

const Content = styled.div`
    padding: 1rem;
`;

export default () => {
    return (
        <Content>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                    <Routes path='*' />
                </Router>
            </React.Suspense>
        </Content>
    );
};
