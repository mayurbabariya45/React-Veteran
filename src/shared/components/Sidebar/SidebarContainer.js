import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Sidebar from './Sidebar';
import menuItems from '../../../data/menuItems.json';

const SidebarContainer = ({ history, selectedMenuItemId }) => {
  const handleMenuItemClick = (menuItem) => {
    history.push(menuItem.url);
  }

  return (
    <Sidebar
      menuItems={menuItems}
      selectedMenuItemId={selectedMenuItemId}
      handleMenuItemClick={handleMenuItemClick}
    />
  );
};

SidebarContainer.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  selectedMenuItemId: PropTypes.number,
};

SidebarContainer.defaultProps = {
  selectedMenuItemId: 0,
};

const mapStateToProps = state => ({
  selectedMenuItemId: state.app.selectedMenuItemId,
});

export default connect(mapStateToProps)(withRouter(SidebarContainer));
