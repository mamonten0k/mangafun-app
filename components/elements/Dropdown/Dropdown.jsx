import { useRef } from 'react';
import { Accordion } from '../';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import classes from './Dropdown.module.scss';

//Проверить, можно ли как-нибудь переписать
//Теперь я доволен аккордеоном, но лучше переделать ещё раз почекать Dd
const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const HandleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classes.layout}>
      <img
        src='./Burger.svg'
        alt='Dropdown toggle button'
        className='icon icon-control'
        onClick={HandleClick}
      />
      <div
        className={`${classes.content}`}
        style={isActive ? { top: '0' } : {}}
        ref={dropdownRef}>
        <div className={classes.header}>
          <h2>mangafun</h2>
          <img
            src='./Close.svg'
            alt='Dropdown close button'
            className='icon'
            onClick={HandleClick}
          />
        </div>
        <Accordion withIcons={true}>
          <div label='Home Page'></div>
          <div label='Titles'>
            <li key={'Titles-1'}>Advanced Search</li>
            <li key={'Titles-2'}>Updates</li>
            <li key={'Titles-3'}>Popular</li>
            <li key={'Titles-4'}>Random</li>
          </div>
          <div label='Settings'></div>
        </Accordion>
      </div>
    </div>
  );
};

export { Dropdown };
