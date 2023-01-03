import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img className='header__icon' src='logo.png' alt='' />
			</Link>
			<div className='header__right'>
				<Link className='link' to='/aboutus'>
					<p className='aboutus'>About-Us</p>
				</Link>

				<Link className='link' to='/history'>
					<p className='history'>History</p>
				</Link>

				<Link className='link' to='/contactus'>
					<p className='contactus'>Contact Us</p>
				</Link>

				<Link className='link' to='/productpage'>
					<p className='local__Market'>Local Market</p>
				</Link>

				<Link className='link' to='/productpage'>
					<SearchIcon className='search' />
				</Link>

				<Link className='link' to='/login'>
					<Avatar className='avatar' />
				</Link>
			</div>
		</div>
	);
}

export default Header;
