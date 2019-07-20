import React from 'react';
import PropTypes from 'prop-types';
import { Form, reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ComponentSelector from './ComponentSelector';
import fields from '../../../../../data/clients/veteran-information/fields.json';
import { noop } from '../../../../../utils';

const VeteranForm = ({ handleSubmit, onSubmit, onCancelClick }) => (
  <div className="veteran-form">
    <Typography variant="h4">Client Form</Typography>
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(field => (
        <div className="form-field" key={field.name}>
          <ComponentSelector field={field} />
          <br />
        </div>
      ))}
      <div className="controls">
        <Button variant="contained" color="primary" type="submit">Save</Button>
        <Button variant="outlined" color="primary" type="button" onClick={onCancelClick}>Cancel</Button>
      </div>
    </Form>
  </div>
);

VeteranForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onCancelClick: PropTypes.func,
};

VeteranForm.defaultProps = {
  onSubmit: noop,
  onCancelClick: noop,
};

export default reduxForm({ form: 'veteranForm', enableReinitialize: true })(VeteranForm);
