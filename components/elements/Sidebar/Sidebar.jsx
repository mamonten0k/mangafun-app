import { useRef } from 'react';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [isOpened, setIsOpened] = useDetectOutsideClick(sidebarRef, false);

  styles['sidebar-extended'] = [
    styles.sidebar,
    !isOpened ? styles['sidebar-closed'] : '',
  ].join(' ');

  const HandleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div ref={sidebarRef} className={styles['sidebar-extended']}>
      <header className={styles.header}>
        <span className={styles['header-title']}>mangafun</span>
        <button type='button' onClick={HandleClick}>
          <img src='/Burger.svg' alt='' />
        </button>
      </header>
      <hr />
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link href='/'>
              <SidebarItem
                heading='Home page'
                icon='/Home.svg'
                isOpened={isOpened}
              />
            </Link>
          </li>
          <li>
            <SidebarItem
              heading='Titles'
              icon='/Titles.svg'
              isOpened={isOpened}>
              <Link href='/search'>
                <span>Advanced Search</span>
              </Link>
              <Link href='/search?filter=popular'>
                <span>Popular</span>
              </Link>
              <Link href='/title?id=random'>
                <span>Random</span>
              </Link>
              <Link href='/profile?tab=titles'>
                <span>My Titles</span>
              </Link>
            </SidebarItem>
          </li>
          <li>
            <Link href='/settings'>
              <SidebarItem
                heading='Settings'
                icon='/Settings.svg'
                isOpened={isOpened}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
