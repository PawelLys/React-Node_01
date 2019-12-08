import React, { useEffect, useRef } from 'react';

import * as s from './styledItemOption';

export default React.memo(
  ({ showMenu, setShowMenu, index, smallMenu, onOpenElementClick, onEditElementClick }) => {
    const containerRef = useRef(null);

    useEffect(() => {
      if (showMenu) document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });

    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) setShowMenu(null);
      else {
        setTimeout(() => {
          setShowMenu(null);
        }, 150);
      }
    };

    if (showMenu)
      return (
        <s.MenuContainer ref={containerRef}>
          <s.MenuWrapper smallerHeight={smallMenu}>
            {!smallMenu && (
              <React.Fragment>
                <s.MenuItem onClick={() => onOpenElementClick(index)}>Open</s.MenuItem>
                <s.MenuItem onClick={() => onEditElementClick(index)}>Edit</s.MenuItem>
                <s.ItemDivider />
              </React.Fragment>
            )}
            <s.MenuItem onClick={() => console.log('deleteBtnClicked')}>Delete</s.MenuItem>
          </s.MenuWrapper>
        </s.MenuContainer>
      );
    else return null;
  }
);
