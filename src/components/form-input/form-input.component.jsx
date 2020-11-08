import React from 'react';
import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label,
  id,
  type,
  required,
  value,
  name,
}) => (
  <div className="form-input-group">
    <input
      className="form-input"
      onChange={handleChange}
      id={id}
      type={type}
      required={required}
      value={value}
      name={name}
    />

    {
      label
        ? (
          <label
            htmlFor={id}
            className={`form-input-label ${value.length ? 'shrink' : ''}`}
          >
            { label }
          </label>
        )
        : null
    }
  </div>
);

export default FormInput;
