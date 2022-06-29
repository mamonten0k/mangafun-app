import Link from 'next/link';
import { Sidebar } from '../../elements';
import { SearchBar } from '../../elements';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.base}>
      <div className={`${styles.layout}`}>
        <div className={styles.left}>
          <Sidebar />
          <Link href='/'>
            <div className={styles.logo}>mangafun</div>
          </Link>
        </div>
        <div className={styles.right}>
          <SearchBar />
          <Link href='/profile'>
            <img src='/Profile.svg' alt='Profile icon' className='icon' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
