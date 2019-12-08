import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

const blueActiveBar = css`
  content: ' ';
  position: absolute;
  left: 4px;
  width: 4px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  background-color: ${props => props.theme.barChoosen};
  opacity: 0;
  transition: opacity 300ms ease 0s;

  ${props =>
    props.activeElement &&
    css`
      opacity: 1;
    `}
`;

export const HeaderFixed = styled.div`
  background-color: ${props => props.theme.leftNavBg};
  color: ${props => props.theme.leftNavColor};
  font-size: ${props => props.theme.leftNavSize};
  width: 48px;
  height: calc(100vh - 3rem);
  top: 48px;
  font-size: 14px;
  font-weight: 400;
  transition: width 0.2s;
  border-right: 1px solid ${props => props.theme.navBorderColor};
  user-select: none;
  z-index: 3;

  ${props =>
    props.openBurger &&
    css`
      width: 199px;
      overflow-y: auto;
      overflow-x: hidden;
    `}

  ${({ displayFixed }) =>
    displayFixed &&
    css`
      position: fixed;
    `}
`;

export const NavBurger = styled.div`
  width: 100%;
  padding: 13px 0;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: ${props => props.theme.leftNavBgHover};
  }

  :active {
    background-color: ${props => props.theme.leftNavBgActive};
  }
`;

export const Burger = styled(Icon)`
  width: 48px;
  font-size: calc(${props => props.theme.leftNavSize} + 2px);
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NestedNavTitle = styled.div`
  position: absolute;
  left: 57px;
  top: 50%;
  transform: translateY(-50%);
  padding: 4.8px 8px;
  white-space: nowrap;
  text-transform: capitalize;
  background-color: #fff;
  font-weight: 400;
  box-shadow: 0px 0px 3px 0.5px rgba(0, 0, 0, 0.5);
  pointer-events: none;

  animation-name: change_opacity;
  animation-duration: 0.7s;

  @keyframes change_opacity {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ::after {
    content: ' ';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    left: -6px;
    transform: translateY(-50%) rotate(45deg);
    box-shadow: -2px 2px 3px -2px rgba(0, 0, 0, 0.5);
    background-color: #fff;
  }
`;

export const NestedNavTitleLong = styled(NestedNavTitle)`
  position: fixed;
  top: 70px;
  left: 209px;
  opacity: 1;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavWrapper = styled.li`
    height: 42px;
    width: 100%;
    display: flex;
    cursor: pointer;
    position: relative;

    ${props =>
      props.show &&
      css`
        height: auto;
        min-height: 42px;
        align-items: center;
      `}

    ${props =>
      props.activeElement &&
      css`
        font-weight: 500;
      `}

    ::before {
        ${blueActiveBar};
    }

     
    ${props =>
      !props.activeElement &&
      css`
        :hover {
          background-color: ${props => props.theme.leftNavBgHover};
        }
      `}
    
    ${props =>
      !props.activeElement &&
      css`
        :active {
          background-color: ${props => props.theme.leftNavBgActive};
        }
      `}
  
    ${props =>
      props.activeElement &&
      css`
        background-color: ${props => props.theme.choosenLeftNavBg};
      `}
`;

export const NavIcons = styled(Burger)`
  flex: 0 0 48px;
  height: 42px;
`;

export const NavTitle = styled.div`
  flex: 0 0 120px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 8px;
  line-height: 20px;
  opacity: 0;
  visibility: hidden;
  transition: ${props => (props.show ? `transform .1s .1s, opacity .1s .1s, flex 0s .15s` : `none`)};
  transform: translateX(-100%);

  ${props =>
    props.show &&
    css`
      flex: 1 1 auto;
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    `}
`;

export const IconContainer = styled.div`
  flex: 0 0 30px;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: ${props => (props.show ? `transform .1s .13s, opacity .1s .13s` : `none`)};

  ${props =>
    props.show &&
    css`
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    `}
`;

export const ArrowIcon = styled(NavIcons)`
  width: 100%;
  font-size: calc(${props => props.theme.leftNavSize} - 2px);
  transition: transform 0.2s;

  ${props =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}
`;

export const NestedContainer = styled.div`
  position: absolute;
  left: 49px;
  height: ${props => props.heightCalc}px;
  width: 140px;
  text-transform: capitalize;
  background-color: rgb(244, 244, 244);
  cursor: initial;
`;

export const NestedTitle = styled.div`
  height: 42px;
  margin-left: -1px;
  background-color: ${props => props.theme.leftNavBgHover};
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavUnderTitle = styled.ul`
  margin: 0;
  padding: 0;
`;

export const UnderItems = styled.li`
    height: 42px;
    display: flex;
    position: relative;

    ${props =>
      props.activeElement &&
      css`
        font-weight: 500;
      `}

    ::before {
        ${blueActiveBar};
    }
    
    ${props =>
      !props.activeElement &&
      css`
        :hover {
          background-color: ${props => props.theme.leftNavBgHover};
        }
      `}
    
    ${props =>
      !props.activeElement &&
      css`
        :active {
          background-color: ${props => props.theme.leftNavBgActive};
        }
      `}
  
    ${props =>
      props.activeElement &&
      css`
        background-color: ${props => props.theme.choosenLeftNavBg};
      `}
`;

export const ItemsLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  height: 42px;
  padding-left: 58px;
  text-decoration: none;
  color: inherit;
  text-transform: capitalize;
`;

export const NestedUnderItems = styled(UnderItems)`
  height: 42px;
`;

export const NestedItemsLink = styled(ItemsLink)`
  padding-left: 16px;
`;
