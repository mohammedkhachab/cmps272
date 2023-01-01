import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
	return (
		<div className='footer'>
			<div className='f1'>
				<h4>Tourism Compass</h4>
				<p>This is a tourism compass website</p>
				<InstagramIcon className='instagramIcon' />
				<FacebookIcon className='facebookicon' />
				<TwitterIcon className='twitterIcon' />
			</div>
			<div className='f2'>
				<h4>About Us</h4>
				<p>
					tourism compass is a travel website that encourage the tourist to vist
					Lebanon and discover its beauty
				</p>
				<p className='privacy'>Privacy · Terms · Sitemap · Company Details</p>
			</div>
		</div>
	);
}

export default Footer;
