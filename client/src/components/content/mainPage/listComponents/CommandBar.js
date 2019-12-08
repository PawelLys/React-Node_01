import React from 'react';
import { connect } from 'react-redux';

import { CommandBar as CommandBarRender } from 'office-ui-fabric-react/lib/CommandBar';

const _farItems = [
  {
    key: 'tile',
    text: 'Grid view',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Grid view',
    iconOnly: true,
    iconProps: { iconName: 'Tiles' },
    onClick: () => console.log('Tiles')
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info')
  }
];

const overflowProps = { ariaLabel: 'More commands' };

const CommandBar = ({ inputActive, onNewElementClick, onEditElementClick, onOpenElementClick }) => {
  const _overflowItems = () => {
    if (inputActive < 2)
      return [
        {
          key: 'move',
          text: 'Move to...',
          onClick: () => console.log('Move to'),
          iconProps: { iconName: 'MoveToFolder' }
        },
        {
          key: 'copy',
          text: 'Copy to...',
          onClick: () => console.log('Copy to'),
          iconProps: { iconName: 'Copy' }
        },
        {
          key: 'rename',
          text: 'Rename...',
          onClick: () => console.log('Rename'),
          iconProps: { iconName: 'Edit' }
        }
      ];
    else return [];
  };

  const _items = () => {
    if (inputActive.length === 0)
      return [
        {
          key: 'newItem',
          text: 'New',
          cacheKey: 'myCacheKey',
          iconProps: { iconName: 'Add' },
          onClick: () => onNewElementClick()
        },
        {
          key: 'fastEdition',
          text: 'Fast edition',
          iconProps: { iconName: 'Edit' }
        },
        {
          key: 'share',
          text: 'Share',
          iconProps: { iconName: 'Share' },
          onClick: () => console.log('Share')
        },
        {
          key: 'powerApps',
          text: 'PowerApps',
          iconProps: { iconName: 'powerApps' },
          onClick: () => console.log('Download'),
          subMenuProps: {
            items: [
              {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' },
                ['data-automation-id']: 'newEmailButton' // optional
              },
              {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' }
              }
            ]
          }
        }
      ];
    else if (inputActive.length === 1)
      return [
        {
          key: 'edition',
          text: 'Edition',
          iconProps: { iconName: 'Edit' },
          onClick: () => onEditElementClick(inputActive[0])
        },
        {
          key: 'delete',
          text: 'Delete',
          iconProps: { iconName: 'delete' },
          onClick: () => console.log('delete')
        },
        {
          key: 'share',
          text: 'Share',
          iconProps: { iconName: 'Share' },
          onClick: () => console.log('Share')
        },
        {
          key: 'powerApps',
          text: 'PowerApps',
          iconProps: { iconName: 'powerApps' },
          onClick: () => console.log('Download'),
          subMenuProps: {
            items: [
              {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' },
                ['data-automation-id']: 'newEmailButton' // optional
              },
              {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' }
              }
            ]
          }
        }
      ];
    else
      return [
        {
          key: 'delete',
          text: 'Delete',
          iconProps: { iconName: 'delete' },
          onClick: () => console.log('delete')
        }
      ];
  };

  return (
    <CommandBarRender
      items={_items()}
      overflowItems={_overflowItems()}
      overflowButtonProps={overflowProps}
      farItems={_farItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
      styles={{ root: { padding: '0' } }}
    />
  );
};

const mapStateToProps = ({ inputActive }) => {
  return { inputActive };
};

export default connect(mapStateToProps)(CommandBar);
