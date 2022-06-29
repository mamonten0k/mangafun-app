import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import { Input } from '../Input/Input';
import classes from './SearchBar.module.scss';

const SearchBar = () => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(inputRef, false);

  const HandleClick = () => {
    setIsActive(!isActive);
    inputRef.current.focus();
  };

  return (
    <div className={`${classes.layout}`}>
      <button
        className={`${classes.control}  ${
          (isActive && classes._outlined) || ''
        }`}
        onClick={HandleClick}>
        <BiSearch className={`${classes.icon}`} />
      </button>
      <Input
        ref={inputRef}
        classes={`${classes.input} ${isActive && classes._focused}`}
      />
    </div>
  );
};

export { SearchBar };
