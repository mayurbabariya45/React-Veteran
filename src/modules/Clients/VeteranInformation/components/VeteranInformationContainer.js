import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VeteranInformation from './VeteranInformation';
import RequestStates from '../../../../utils/request-states';

const VeteranInformationContainer = ({ loading }) => (
  <VeteranInformation loading={loading} />
);

VeteranInformationContainer.propTypes = {
  loading: PropTypes.bool,
};

VeteranInformationContainer.defaultProps = {
  loading: false,
};

const mapStateToProps = state => ({
  loading: state.veteran.requestState === RequestStates.loading,
});

export default connect(mapStateToProps)(VeteranInformationContainer);
