import styled, { css } from "styled-components";
import { Input } from "./styledLoginPage";

import { Icon } from "office-ui-fabric-react/lib/Icon";

const Btn = css`
  cursor: pointer;
  color: #fff;
  background-color: #50abc9;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-transform: uppercase;
  transition: all 0.2s;
  outline: none;

  :hover {
    background-color: #217d9c;
  }

  :active {
    background-color: #0c5c78;
  }
`;

export const RegisterForm = styled.div`
  flex: 0 1 400px;
  min-width: 300px;
  margin: 1rem 5rem;
  background-color: #fff;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3rem;
  color: #000;
`;

export const RegisterDescription = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const SkipBtn = styled.button`
  ${Btn}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkipBtnIcon = styled(Icon)`
  margin-left: 0.3rem;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const Item = styled.li`
  margin-top: 1rem;
  transition: all 0.2s;

  ${({ makeSpace }) =>
    makeSpace &&
    css`
      padding-bottom: 0.5rem;
    `}
`;

export const ItemDescription = styled.div`
  margin-top: 0.4rem;
`;

export const InputField = styled.input`
  ${Input}
  width: 100%;
  height: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const DoneBtn = styled(SkipBtn)`
  margin-top: 2rem;
  text-transform: none;
  position: relative;

  ${({ disabled }) =>
    disabled &&
    css`
      :disabled {
        background: #ccc;
      }
    `}
`;

export const DoneBtnIcon = styled(Icon)`
  margin-left: 0.5rem;
  font-size: 18px;
  margin-top: 2px;
`;

export const Required = styled.div`
  position: absolute;
  content: "*";
  left: 25px;
  top: 0;
  width: 5px;
  height: 10px;
`;

const errMessage = css`
  position: absolute;
  left: 0;
  width: 200px;
  font-size: 12px;
  height: 10px;
  color: red;
  font-weight: 400;
`;

export const displayErrors = styled.div`
  ${errMessage}
  bottom: -1rem;
`;

export const displayLoginErr = styled(displayErrors)`
  ${errMessage}
  top: -1rem;
  left: -2.5rem;
`;
