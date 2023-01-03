import React, { useState } from 'react';
import './Register.css';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

function Register(props) {
	const history = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};

	const Signup = (e) => {
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
			<h2>Register</h2>
			<form className='register-form' onSubmit={Signup}>
				<label htmlFor='name'>Full name</label>
				<input
					value={name}
					name='name'
					onChange={(e) => setName(e.target.value)}
					id='name'
					placeholder='full Name'
				/>
				<label htmlFor='email'>email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='youremail@gmail.com'
					id='email'
					name='email'
				/>
				<label htmlFor='password'>password</label>
				<input
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					type='password'
					placeholder=' ****** '
					id='password'
					name='password'
				/>
				<button type='submit' onClick={() => history.push('/login')}>
					Sign up
				</button>
			</form>
			<button className='link-btn' onClick={() => history.push('/login')}>
				Already have an account? Login here.
			</button>

			{/* onClick={() => props.onFormSwitch('login')} */}
		</div>
	);
}

export default Register;
