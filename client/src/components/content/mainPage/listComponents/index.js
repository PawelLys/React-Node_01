import React, { useEffect } from 'react';

import CommandBar from './CommandBar';
import ItemsList from './ItemsList';

export default ({ setModal, arrayOfList }) => {
  useEffect(() => {
    return () => {
      setModal('');
    };
  }, []);

  const onNewElementClick = () => setModal('open -1');

  const onOpenElementClick = value => setModal(`open ${value}`);

  const onEditElementClick = value => setModal(`edit ${value}`);

  return (
    <React.Fragment>
      <CommandBar
        onNewElementClick={onNewElementClick}
        onEditElementClick={onEditElementClick}
        onOpenElementClick={onOpenElementClick}
      />
      <ItemsList
        data={arrayOfList}
        onEditElementClick={onEditElementClick}
        onOpenElementClick={onOpenElementClick}
      />
    </React.Fragment>
  );
};
