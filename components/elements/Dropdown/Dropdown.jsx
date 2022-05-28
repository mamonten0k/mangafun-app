import { useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import { GoSettings } from "react-icons/go"
import { MdBook } from "react-icons/md"
import { RiHome2Line } from "react-icons/ri"
import classes from './Dropdown.module.scss'

const Dropdown = () => {
	const [dropdownIsOpened, SetDropdownIsOpened] = useState(false);

  return (
	<div className={classes.dropdown}>
		<BiMenuAltLeft className={classes.iconControl} onClick={() => SetDropdownIsOpened(!dropdownIsOpened)}/>
		<ul className={`${classes.dropdownItems} ${dropdownIsOpened && classes._opened}`}>
			<li className={classes.dropdownItem}>
				<RiHome2Line className={classes.icon}/>
				<span>Home Page</span>
			</li>
			<li className={classes.dropdownItem}>
				<MdBook className={classes.icon}/>
				<span>Titles</span>
			</li>
			<li className={classes.dropdownItem}>
				<GoSettings className={classes.icon}/>
				<span>Settings</span>
			</li>
		</ul>
	</div>
  )
}

export default Dropdown