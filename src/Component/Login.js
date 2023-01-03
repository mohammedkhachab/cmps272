import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(props) {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};

	const Signin = (e) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='auth-form-container'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={Signin}>
				<label htmlFor='email'>email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='youremail@gmail.com'
					className='email'
					name='email'
				/>
				<label htmlFor='password'>password</label>
				<input
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					type='password'
					placeholder='****'
					className='password'
					name='password'
				/>
				<button type='submit' onClick={() => history.push('/')}>
					Log In
				</button>
			</form>
			<Link className='link' to='/register'>
				<button
					className='link-btn'
					onClick={() => props.onFormSwitch('register')}
				>
					Don't have an account? Register here.
				</button>
			</Link>
		</div>
	);
}

export default Login;
