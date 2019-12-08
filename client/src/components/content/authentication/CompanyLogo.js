import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/logo.png';

export const CompanyLogo = styled.div`
    display: flex;
    align-self: flex-start;
    color: #000;
`;

export const PresentTitle = styled.div`
    font-size: 32px;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    padding-bottom: 3px;
`;

export default () => {
    return(
        <CompanyLogo>
            <img alt="logo" src={Logo} />
            <PresentTitle>TODO</PresentTitle>
        </CompanyLogo>
    )
}