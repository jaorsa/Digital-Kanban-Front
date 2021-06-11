import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    return(
        <div className={`${classes.control} ${
            props.IsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
          />
        </div>
    );
};

const InputNumber = props => {
  return(
      <div className={`${classes.control} ${
          props.IsValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          min={props.min}
          step={props.step}
        />
      </div>
  );
};

export default Input;

export {InputNumber};
