import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import VeteranForm from './VeteranForm';
import { noop } from '../../../../../utils';

const VeteranFormContainer = ({ currentVeteran, resetForm }) => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const onCancelClick = () => {
    resetForm('veteranForm');
  };

  return (
    <VeteranForm initialValues={currentVeteran} onSubmit={onSubmit} onCancelClick={onCancelClick} />
  );
};

VeteranFormContainer.propTypes = {
  currentVeteran: PropTypes.instanceOf(Object),
  resetForm: PropTypes.func,
};

VeteranFormContainer.defaultProps = {
  currentVeteran: {},
  resetForm: noop,
};

const mapStateToProps = state => ({
  currentVeteran: state.veteran.currentVeteran,
});

const mapDispatchToProps = dispatch => ({
  resetForm: formName => dispatch(reset(formName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeteranFormContainer);
