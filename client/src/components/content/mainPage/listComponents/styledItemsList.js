import styled, { css } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Component = styled.div`
  padding: 10px 32px 20px;
  display: flex;
  flex-direction: column;
`;

export const ComponentTitle = styled.div`
  font-size: 21px;
  padding-bottom: 16px;
`;

export const ComponentWrapper = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const WrapperItem = styled.li`
  display: flex;
  font-size: 14px;
  position: relative;
  line-height: 32px;
  white-space: nowrap;
  margin-bottom: 1px;
  user-select: none;
  border-bottom: 1px solid rgb(234, 234, 234);

  :hover {
    color: rgb(0, 0, 0);
    background: rgb(244, 244, 244);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgb(234, 234, 234);

      :hover {
        background-color: rgb(218, 218, 218);
      }
    `}
`;

export const CheckboxWrapper = styled.div`
  height: 42px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperInput = styled.div`
  line-height: 1;
  width: 18px;
  height: 18px;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      ::before {
        content: '';
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        opacity: 1;
        border-radius: 50%;
        background: rgb(0, 176, 240);
      }
    `}
`;

export const InputCircle = styled(Icon)`
  font-size: 18px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  text-align: center;
  vertical-align: middle;
  color: rgb(200, 200, 200);
`;

export const InputCheckmark = styled(Icon)`
  font-size: 16px;
  position: absolute;
  left: 0.5px;
  top: 0px;
  width: 18px;
  height: 18px;
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  color: rgb(200, 200, 200);

  ${({ hovered }) =>
    hovered &&
    css`
      opacity: 1;
    `}

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      color: rgb(255, 255, 255);
    `}
`;

export const TitleWrapper = styled.div`
  width: 90%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  flex: 1 1 auto;
`;

export const TitleIconContainer = styled.div`
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  :hover {
    background-color: #eaeaea;
    color: #373737;
  }
`;

export const WrapperItemMain = styled(WrapperItem)`
  max-height: 32px;
`;

export const CheckboxWrapperMain = styled(CheckboxWrapper)`
  height: auto;
`;

export const WrapperInputMain = styled(WrapperInput)``;

export const TitleWrapperMain = styled(TitleWrapper)``;

export const IconTitleMain = styled(Icon)`
  padding: 0 4px;
  color: rgb(89, 89, 89);
  font-size: 12px;
`;
