import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/AppHeader';
import Sidebar from '../../components/Sidebar/SidebarContainer';

const MainTemplate = ({ screenName, children }) => (
  <div className="main-template">
    <AppHeader screenName={screenName} />
    <div className="template-body">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  </div>
);

MainTemplate.propTypes = {
  screenName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplate.defaultProps = {
  screenName: '',
  children: <div />,
};

export default MainTemplate;
