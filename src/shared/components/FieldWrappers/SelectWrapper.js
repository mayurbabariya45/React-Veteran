import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SelectWrapper = ({
  input, meta, label, options,
}) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" style={{ minWidth: 220 }}>
      <InputLabel ref={inputLabel} htmlFor={input.name}>
        {label}
      </InputLabel>
      <Select
        {...input}
        value={input.value}
        onChange={input.onChange}
        error={!!(meta.touched && meta.error)}
        input={<OutlinedInput labelWidth={labelWidth} name={input.name} id={input.name} />}
      >
        {
          options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))
        }
      </Select>
      {meta.touched && meta.error && <FormHelperText className="invalid">{meta.error}</FormHelperText>}
    </FormControl>
  );
};

SelectWrapper.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string,
  options: PropTypes.instanceOf(Array),
};

SelectWrapper.defaultProps = {
  input: {},
  meta: {},
  label: '',
  options: [],
};

export default SelectWrapper;
