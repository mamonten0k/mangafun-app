import { Dropdown } from '../../elements';
import { SearchBar } from '../../elements';
import classes from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className={`container ${classes['container-layout']}`}>
        <div className={classes.left}>
          <Dropdown />
          <Link href='/'>
            <div className={classes.logo}>mangafun</div>
          </Link>
        </div>
        <div className={classes.right}>
          <SearchBar />
          <Link href='/profile'>
            <img
              src='./Profile.svg'
              alt='User profile icon'
              className={classes['profile-icon']}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
