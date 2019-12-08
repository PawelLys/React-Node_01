import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Wrapper } from './styledMain';

import ListComponent from './listComponents';
import ModalRightSide from './listComponents/modalRightSide';

const MainPage = ({ windowWidth }) => {
  const [showModalRightSide, setModalRightSide] = useState('');

  const arrayOfList = [
    {
      title: 'testtesttest1',
      description: 'egsefss'
    },
    {
      title: 'testtesttest2',
      description: 'egseffafwss'
    },
    {
      title: 'testtesttest3',
      description: 'egsefwfaffss'
    }
  ];

  const setModal = type => setModalRightSide(type);

  return (
    <Container>
      <Wrapper addLeftSpace={windowWidth}>
        <ListComponent arrayOfList={arrayOfList} setModal={setModal} />
      </Wrapper>
      <ModalRightSide
        shouldDisplay={showModalRightSide}
        changeDisplayState={setModalRightSide}
        addLeftSpace={windowWidth}
      />
    </Container>
  );
};

const mapStateToProps = ({ windowWidth }) => {
  return { windowWidth };
};

export default connect(mapStateToProps)(MainPage);
