import { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(
  ({ id, type, maxlength, minlength, required, placeholder, classes }, ref) => {
    const className = [styles.base, classes].join(' ');
    return (
      <input
        id={id}
        type={type}
        maxLength={maxlength}
        minLength={minlength}
        required={required ? 'requred' : ''}
        ref={ref}
        className={className}
        placeholder={placeholder}></input>
    );
  }
);

export { Input };
