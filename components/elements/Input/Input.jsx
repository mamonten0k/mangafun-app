import { forwardRef } from 'react';
import styles from './Input.module.scss';

//Вернуть просто обычный старый добрый input или нет
const Input = forwardRef(
  ({ id, type, maxlength, minlength, required, placeholder, classes }, ref) => {
    const className = [styles.base, classes].join(' ');
    return (
      <input
        id={id}
        type={type}
        maxlength={maxlength}
        minlength={minlength}
        required={required ? 'requred' : ''}
        ref={ref}
        className={className}
        placeholder={placeholder}></input>
    );
  }
);

export { Input };
