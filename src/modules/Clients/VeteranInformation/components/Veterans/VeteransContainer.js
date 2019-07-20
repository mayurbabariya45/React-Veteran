import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Veterans from './Veterans';
import { noop } from '../../../../../utils';
import * as actions from '../../redux/actions';

const VeteransContainer = ({ getVeterans, veterans, setCurrentVeteran }) => {
  useEffect(() => {
    getVeterans();
  }, []);

  return (
    <Veterans veterans={veterans} setCurrentVeteran={setCurrentVeteran} />
  );
};

VeteransContainer.propTypes = {
  getVeterans: PropTypes.func,
  veterans: PropTypes.instanceOf(Array),
  setCurrentVeteran: PropTypes.func,
};

VeteransContainer.defaultProps = {
  getVeterans: noop,
  veterans: [],
  setCurrentVeteran: noop,
};

const mapStateToProps = state => ({
  veterans: state.veteran.veterans,
});

const mapDispatchToProps = dispatch => ({
  getVeterans: () => dispatch(actions.getVeterans()),
  setCurrentVeteran: veteran => dispatch(actions.setCurrentVeteran(veteran)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeteransContainer);
