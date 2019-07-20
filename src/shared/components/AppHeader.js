import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppHeader = ({ screenName }) => (
  <AppBar position="fixed" className="app-header">
    <Toolbar>
      <Typography variant="h6">
        {screenName || 'test'}
      </Typography>
    </Toolbar>
  </AppBar>
);

AppHeader.propTypes = {
  screenName: PropTypes.string,
};

AppHeader.defaultProps = {
  screenName: '',
};

export default AppHeader;
