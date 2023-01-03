import React from 'react';
import './ContactUs.css';

function ContactUs() {
	return (
		<div className='contactuss'>
			<div className='info'>
				<h2>Contact Me</h2>
				<p>Email: ghadygergie0@gmail.com</p>
				<p>Phone: +961 03 657 244</p>
				<p>..or use the following form</p>
			</div>
			<form action=''>
				<input type='text' placeholder='your name *' required />
				<input type='email' placeholder='your email *' required />
				<input type='tel' placeholder='your phone number *' required />
				<textarea
					name='msg'
					className='msg'
					placeholder='your message *'
					rows='10'
					cols='10'
				/>
				<button className='btn'>Send Message</button>
			</form>
		</div>
	);
}

export default ContactUs;
