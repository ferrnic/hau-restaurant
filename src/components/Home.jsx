import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import HomeSeed from './HomeSeed';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.main};
    display: flex;
`;

const 
Home = () => (
    <Wrapper>
        <Link to='/carte'><HomeSeed /></Link>
        <Link to='/vins'><HomeSeed /></Link>
        <Link to='/restaurant'><HomeSeed /></Link>
    </Wrapper>
);

export default Home;
