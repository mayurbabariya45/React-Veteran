import React from 'react';
import PropTypes from 'prop-types';

import MainTemplate from './MainTemplate';

const MainTemplateContainer = ({ screenName, children }) => (
  <MainTemplate screenName={screenName}>
    {children}
  </MainTemplate>
);

MainTemplateContainer.propTypes = {
  screenName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplateContainer.defaultProps = {
  screenName: '',
  children: <div />,
};

export default MainTemplateContainer;
