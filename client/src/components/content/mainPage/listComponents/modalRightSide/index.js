import React, { useEffect, useRef } from 'react';

import { Container } from './styledModalRightSide';

export default ({ shouldDisplay, changeDisplayState, addLeftSpace }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldDisplay) document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (containerRef.current && !containerRef.current.contains(event.target)) changeDisplayState('');
  };

  return (
    <Container shouldDisplay={shouldDisplay} addSpace={addLeftSpace} ref={containerRef}>
      {shouldDisplay}
    </Container>
  );
};
