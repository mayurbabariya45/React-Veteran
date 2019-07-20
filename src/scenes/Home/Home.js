import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MainTemplate from '../../shared/templates/MainTemplate/MainTemplateContainer';
import { HomeContainer } from '../../modules/Home';
import menuItems from '../../data/menuItems.json';
import * as appActions from '../../modules/App/actions';
import { noop, recursiveFindMenuItemIdByPath } from '../../utils';

const Home = ({ location, setSelectedMenuItemId }) => {
  useEffect(() => {
    const selectedMenuItemId = recursiveFindMenuItemIdByPath(menuItems, location.pathname);
    setSelectedMenuItemId(selectedMenuItemId);
  }, []);

  return (
    <MainTemplate screenName="Screen 1">
      <HomeContainer />
    </MainTemplate>
  );
};

Home.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  setSelectedMenuItemId: PropTypes.func,
};

Home.defaultProps = {
  setSelectedMenuItemId: noop,
};

const mapDispatchToProps = dispatch => ({
  setSelectedMenuItemId: menuItemId => dispatch(appActions.setSelectedMenuItemId(menuItemId)),
});

export default connect(null, mapDispatchToProps)(withRouter(Home));
