import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const HeaderTop = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${props => props.theme.topNavBg};
  color: ${props => props.theme.topNavColor};
  font-size: ${props => props.theme.leftNavSize};
  user-select: none;
  z-index: 3;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  width: 100%;
  height: 48px;
`;

export const WrapperPresent = styled.div`
  width: 135px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  cursor: pointer;
`;

export const PresentTitle = styled.div`
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
`;

export const WrapperNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const NavHelpers = styled.div`
  flex: 1;
  line-height: 48px;
  display: flex;
  justify-content: flex-end;
`;

const Container = css`
  width: 44px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  ${({ activeBg }) =>
    activeBg
      ? css`
          background-color: ${props => props.theme.topNavBgActive};
        `
      : css`
          :hover {
            background-color: ${props => props.theme.topNavBgHover};
          }

          :active {
            background-color: ${props => props.theme.topNavBgActive};
          }
        `}
`;

export const IconContainer = styled.div`
  ${Container}
  cursor: pointer;
`;

export const Icons = styled(Icon)`
  font-size: calc(${props => props.theme.leftNavSize} + 2px);
  font-weight: 300;
`;

export const AccountLink = styled.a`
  ${Container}
  text-decoration: none;
  color: inherit;
`;

export const AccountIcon = styled(Icon)`
  font-size: calc(${props => props.theme.leftNavSize} + 8px);
  border-radius: 50%;
`;

export const AccountImg = styled.img`
  width: 32px;
  height: 32px;
  ${({ lighten }) =>
    lighten &&
    css`
      opacity: 0.7;
    `}
`;

export const LightenAccountImg = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
