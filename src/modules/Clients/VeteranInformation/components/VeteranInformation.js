import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';

import Veterans from './Veterans/VeteransContainer';
import VeteranForm from './VeteranForm/VeteranFormContainer';
import GoogleLoader from '../../../../shared/components/GoogleLoader';

const VeteranInformation = ({ loading }) => (
  <div className="veteran-information">
    <BlockUI
      tag="div"
      className="full-min-height"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
      keepInView
    >
      <Veterans />
      <hr />
      <VeteranForm />
    </BlockUI>
  </div>
);

VeteranInformation.propTypes = {
  loading: PropTypes.bool,
};

VeteranInformation.defaultProps = {
  loading: false,
};

export default VeteranInformation;
