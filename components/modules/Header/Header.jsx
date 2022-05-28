import { BiSearch } from 'react-icons/bi';
import Dropdown from '../../elements/Dropdown/Dropdown';
import classes from './Header.module.scss'

const Header = () => {
  return (
	<header className={classes.headerLayout}>
		<div className={classes.headerLeft}>
			<Dropdown/>
			<div className=''>Mangafun</div>
		</div>
		<div className={classes.headerLeft}>
			<div className="">
				<BiSearch/>
				Search
			</div>
		</div>
	</header>
  )
}

export default Header