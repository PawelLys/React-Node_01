import React, { useState } from 'react';

import * as s from './styledItemsList';
import ItemsListRender from './itemsListRender';

const ItemsList = props => {
  const [allItemsSelected, setAllItemsSelected] = useState(false);
  const [checkboxHovered, setCheckboxHovered] = useState(false);

  const areAllItemsSelected = bool => setAllItemsSelected(bool);

  return (
    <s.Component>
      <s.ComponentTitle>Example</s.ComponentTitle>
      <s.ComponentWrapper>
        <s.WrapperItemMain>
          <s.CheckboxWrapperMain
            onClick={() => setAllItemsSelected(!allItemsSelected)}
            onMouseEnter={() => setCheckboxHovered(true)}
            onMouseLeave={() => setCheckboxHovered(false)}
          >
            <s.WrapperInput active={allItemsSelected}>
              <s.InputCircle iconName="CircleRing" />
              <s.InputCheckmark
                iconName="StatusCircleCheckmark"
                hovered={checkboxHovered}
                active={allItemsSelected}
              />
            </s.WrapperInput>
          </s.CheckboxWrapperMain>

          <s.TitleWrapperMain>
            Title
            <s.IconTitleMain iconName="SortDown" />
          </s.TitleWrapperMain>
        </s.WrapperItemMain>

        <ItemsListRender {...props} selectedAll={areAllItemsSelected} selectAll={allItemsSelected} />
      </s.ComponentWrapper>
    </s.Component>
  );
};

export default ItemsList;
