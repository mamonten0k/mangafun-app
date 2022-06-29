import { forwardRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './SidebarItem.module.scss';

const SidebarItem = forwardRef(
  ({ children, heading, href, onClick, icon, isOpened }, ref) => {
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
        <a
          href={href}
          onClick={onClick || HandleClick}
          className={styles['heading--extended']}
          ref={ref}>
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
              <li key={uuidv4()}>{child}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
);

export { SidebarItem };
