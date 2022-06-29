import { useEffect, useState } from 'react';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ children, heading, icon, isOpened }) => {
  const [isActive, setIsActive] = useState(false);

  styles['submenu--extended'] = [
    styles.submenu,
    !isActive ? styles['submenu--closed'] : '',
  ].join(' ');

  styles['heading--extended'] = [
    styles.heading,
    !isOpened ? styles['heading--closed'] : '',
  ].join(' ');

  styles['chevron--extended'] = [
    styles.chevron,
    isActive ? styles['chevron--pressed'] : '',
  ].join(' ');

  const HandleClick = (evt) => {
    evt.preventDefault();
    if (isOpened) setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isOpened && isActive) setIsActive(!isActive);
  }, [isOpened]);

  return (
    <>
      <a href='#' onClick={HandleClick} className={styles['heading--extended']}>
        <img src={icon} alt={`${heading} icon`} className='icon' />
        <span className={styles['heading-text']}>{heading}</span>
        {children && (
          <span className={styles['chevron--extended']}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z'></path>
            </svg>
          </span>
        )}
      </a>
      {children && (
        <ul className={styles['submenu--extended']}>
          {children.map((child) => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export { SidebarItem };
