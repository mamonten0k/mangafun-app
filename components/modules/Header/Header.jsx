import Dropdown from '../../elements/Dropdown/Dropdown';
import SearchBar from '../../elements/SearchBar/SearchBar';
import {CgProfile} from 'react-icons/cg'
import classes from './Header.module.scss'

const Header = () => {
  return (
	<header className={classes.header}>
		<div className={classes.headerLeft}>
			<Dropdown/>
			<div className=''>Mangafun</div>
		</div>
		<div className={classes.headerLeft}>
			<SearchBar/>
			<div className=""></div>
			<CgProfile className={classes.profileIcon}/>
		</div>
	</header>
  )
}

export default Header