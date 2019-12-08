import styled, { css } from 'styled-components';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { UniversalSpinner } from '../../styledNav';

const Container = css`
  flex: 0 1 21rem;
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 562px) {
    flex: 0 1 15rem;
  }
`;

const Btn = css`
  min-width: 220px;
  min-height: 34px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s;
`;

export const Input = css`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  margin: 0;
  border: 1px solid #d1d1d1;
`;

export const MainBackground = styled.div`
  background-color: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  color: #fff;
`;

export const MainPart = styled.main`
  flex: 0 1 42rem;
  min-height: 20rem;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  margin: 0 2rem;

  @media (max-width: 562px) {
    flex-direction: column;
    flex: 0 1 30rem;
    margin: 0 0.4rem;
  }
`;

export const LoginContainer = styled.div`
  ${Container}
  background-color: #fff;
  color: #000;
  padding: 1.5rem 1rem;
  font-weight: 400;
`;

export const CompanyDescription = styled.div`
  opacity: 0.8;
`;

export const LoginDescription = styled.div`
  opacity: 0.7;
  padding-top: 0.5rem;
  font-weight: 400;
  line-height: 17px;
  word-spacing: 0.5px;
  font-size: 13px;
`;

export const InputWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  background-color: #eaeaea;
  align-self: flex-start;
  display: flex;
`;

export const WrapperIcon = styled(Icon)`
  padding: 0 0.5rem;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  align-self: center;
`;

export const Login = styled.input`
  ${Input}
`;

export const Password = styled.input`
  ${Input}
`;

export const LoginBtn = styled.div`
  background-color: #38778c;
  box-shadow: 0px 0px 2px 0.7px rgba(0, 0, 0, 0.4);
  color: inherit;
  cursor: pointer;
  padding: 0.3rem 1.4rem;
  align-self: flex-start;
  border-radius: 5px;
  color: #fff;
  margin-top: 1rem;
  margin-left: 0.9rem;
  transition: all 0.2s;
  position: relative;

  ${({ displayErr }) =>
      displayErr &&
      css`
        margin-top: 2rem;
      `}
    :hover {
    background-color: #306678;
  }

  :active {
    background-color: #285564;
  }
`;

export const ErrorInput = styled.div`
  width: 15rem;
  position: absolute;
  left: 0.2rem;
  top: -1.75rem;
  color: #fe2020;
`;

export const AuthContainer = styled.div`
  ${Container}
  background-color: #5aa2ba;
  border-left: 1px solid #338ba8;
  justify-content: space-around;
  padding: 1rem 0 3rem;

  @media (max-width: 562px) {
    border-right: 1px solid transparent;
    border-bottom: 1px solid #338ba8;
    padding: 0 1rem;
  }
`;

export const AuthDescription = styled.div`
  text-align: center;
  padding: 0 0.3rem;
  font-size: 18px;
  font-weight: 400;
`;

export const GoogleButton = styled.a`
  ${Btn}
  background-color: #dd4b39;
  :hover {
    background-color: #c23321;
  }

  :active {
    background-color: #a32b1c;
  }
`;

export const FacebookButton = styled.a`
  ${Btn}
  background-color: #3b5998;
  :hover {
    background-color: #2d4373;
  }

  :active {
    background-color: #23345a;
  }
`;

export const AuthIcons = styled.img`
  height: 33px;
  padding: 1px;
  flex: 0 0 32px;
  border-right: 1px solid #fff;
`;

export const AuthTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, 50%);
  left: 50%;
  ${UniversalSpinner}
`;

export const BtnSpinner = styled.div`
  ${UniversalSpinner}
  margin-top: 1rem;
  margin-left: 2rem;
  width: 24px;
  height: 24px;
`;
