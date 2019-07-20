import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import TextField from '../../../../../shared/components/FieldWrappers/TextFieldWrapper';
import Select from '../../../../../shared/components/FieldWrappers/SelectWrapper';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const ComponentSelector = ({ field, ...rest }) => {
  const validate = [];
  if (field.required) validate.push(required);
  switch (field.element) {
    case 'input':
      return (
        <Field
          {...rest}
          component={TextField}
          name={field.name}
          type={field.type === 'textarea' ? 'text' : field.type}
          placeholder={field.placeholder}
          label={field.label}
          multiline={field.type === 'textarea'}
          rows={4}
          validate={validate}
        />
      );
    case 'select':
      return (
        <Field
          {...rest}
          component={Select}
          name={field.name}
          label={field.label}
          options={field.items}
          validate={validate}
        />
      );
    default:
      return <div />;
  }
};

ComponentSelector.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default ComponentSelector;
