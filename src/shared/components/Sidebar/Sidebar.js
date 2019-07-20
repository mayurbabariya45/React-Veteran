import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { noop } from '../../../utils';

const generateMenu = (menuItems, selectedMenuItemId, handleMenuItemClick, level = 0) => (
  <List
    style={{
      padding: `0 0 0 ${16 * level}px`,
    }}
  >
    {
      menuItems.map(menuItem => (
        <Fragment key={menuItem.id}>
          <ListItem button onClick={() => handleMenuItemClick(menuItem)}>
            <ListItemText primary={menuItem.title} style={{ color: selectedMenuItemId === menuItem.id ? '#3f51b5' : '#333' }} />
          </ListItem>
          <Divider />
          {
            menuItem.subitems && menuItem.subitems.length > 0
            && generateMenu(menuItem.subitems, selectedMenuItemId, handleMenuItemClick, (level + 1))
          }
        </Fragment>
      ))
    }
  </List>
);

const Sidebar = ({ menuItems, selectedMenuItemId, handleMenuItemClick }) => (
  <Drawer
    className="sidebar"
    variant="permanent"
    classes={{
      paper: 'sidebar-paper',
    }}
  >
    {generateMenu(menuItems, selectedMenuItemId, handleMenuItemClick)}
  </Drawer>
);

Sidebar.propTypes = {
  menuItems: PropTypes.instanceOf(Array),
  selectedMenuItemId: PropTypes.number,
  handleMenuItemClick: PropTypes.func,
};

Sidebar.defaultProps = {
  menuItems: [],
  selectedMenuItemId: 0,
  handleMenuItemClick: noop,
};

export default Sidebar;
