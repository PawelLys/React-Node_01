import { createGlobalStyle } from 'styled-components';
import styled, { css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 1.4;
        font-family: "Segoe UI", "Segoe UI Web (West European)", "Helvetica Neue", sans-serif;
        font-weight: 300;
    }
`;

export const ComponentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const PageContent = styled.div`
    display: flex;
`;

//

export const UniversalSpinner = css`
    animation: spin 1.3s linear infinite;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border-width: 1.5px;
    border-style: solid;
    border-color: rgb(0, 120, 212) rgb(199, 224, 244) rgb(199, 224, 244);
    border-image: initial;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;