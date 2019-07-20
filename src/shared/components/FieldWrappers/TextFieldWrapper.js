import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const TextFieldWrapper = ({
  input, meta, label, type, placeholder, multiline, rows,
}) => (
  <FormControl style={{ minWidth: 320 }}>
    <TextField
      {...input}
      label={label}
      type={type}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      error={!!(meta.touched && meta.error)}
      variant="outlined"
      value={input.value}
      onChange={input.onChange}
    />
    {meta.touched && meta.error && <FormHelperText className="invalid">{meta.error}</FormHelperText>}
  </FormControl>
);

TextFieldWrapper.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

TextFieldWrapper.defaultProps = {
  input: {},
  meta: {},
  label: '',
  type: '',
  placeholder: '',
  multiline: false,
  rows: 4,
};

export default TextFieldWrapper;
