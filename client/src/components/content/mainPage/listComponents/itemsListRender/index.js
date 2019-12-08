import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { setInputActive } from '../../../../actions';

import * as s from '../styledItemsList';
import MenuContainer from './ItemOptionContainer';

const ItemsList = ({ inputActive, setInputActive, data, selectAll, selectedAll, ...props }) => {
  const [inputHover, setinputHover] = useState(null);
  const [btnItemMenu, setBtnItemMenu] = useState(null);
  const [showSmallerMenu, setShowSmallerMenu] = useState(false);

  useEffect(() => {
    if (data.length === inputActive.length) selectedAll(true);
    else if (selectAll) selectedAll(false);
  }, [inputActive]);

  useEffect(() => {
    if (selectAll) setInputActive(data.map((e, index) => index));
    else if (data.length === inputActive.length) setInputActive([]);
  }, [selectAll]);

  const onClickedItem = index => {
    if (inputActive !== 0) setInputActive([index]);
    else setInputActive([...inputActive, index]);
  };

  const onHoveredCheckbox = index => {
    if (!inputActive.includes(index)) setinputHover(index);
  };

  const onLeaveCheckbox = () => setinputHover(null);

  const onClickedCheckbox = (e, index) => {
    e.stopPropagation();
    if (inputActive.includes(index)) setInputActive(inputActive.filter(el => el !== index));
    else setInputActive([...inputActive, index]);
  };

  const onTitleIconMenuClicked = (e, index) => {
    if (inputActive.length > 1) {
      if (inputActive.includes(index)) {
        e.stopPropagation();
        setShowSmallerMenu(true);
      } else showSmallerMenu && setShowSmallerMenu(false);
    } else showSmallerMenu && setShowSmallerMenu(false);
    setBtnItemMenu(index);
  };

  return data.map((el, index) => {
    return (
      <s.WrapperItem
        key={index}
        active={inputActive.includes(index) && true}
        onClick={() => {
          onClickedItem(index);
        }}
      >
        <s.CheckboxWrapper
          onClick={event => onClickedCheckbox(event, index)}
          onMouseEnter={() => onHoveredCheckbox(index)}
          onMouseLeave={onLeaveCheckbox}
        >
          <s.WrapperInput active={inputActive.includes(index) && true}>
            <s.InputCircle iconName="CircleRing" />
            <s.InputCheckmark
              iconName="StatusCircleCheckmark"
              hovered={inputHover === index}
              active={inputActive.includes(index) && true}
            />
          </s.WrapperInput>
        </s.CheckboxWrapper>

        <s.TitleWrapper>
          <s.Title>{el.title}</s.Title>
          <s.TitleIconContainer>
            <Icon iconName="Share" />
          </s.TitleIconContainer>
          <s.TitleIconContainer onClick={event => onTitleIconMenuClicked(event, index)}>
            <Icon iconName="More" style={{ transform: 'rotate(90deg)' }} />
            <MenuContainer
              {...props}
              index={index}
              showMenu={btnItemMenu === index ? true : false}
              smallMenu={showSmallerMenu}
              setShowMenu={setBtnItemMenu}
            />
          </s.TitleIconContainer>
        </s.TitleWrapper>
      </s.WrapperItem>
    );
  });
};

const mapStateToProps = ({ inputActive }) => {
  return { inputActive };
};

export default connect(mapStateToProps, { setInputActive })(ItemsList);
