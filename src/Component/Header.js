import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img className='header__icon' src='logo.png' alt='' />
			</Link>

			<div className='header__center'>
				<input type='text' />
				<SearchIcon />
			</div>

			<div className='header__right'>
				<Link to='/productpage'>
					<p className='local__Market'>Local Market</p>
				</Link>

				<ExpandMoreIcon />

				<Link to='/login'>
					<Avatar />
				</Link>
			</div>
		</div>
	);
}

export default Header;
