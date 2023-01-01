import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SearchPage from './Component/SearchPage';
import ProductPage from './Component/ProductPage';
import Login from './Component/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Component/Register';
function App() {
	return (
		// BEM
		<div className='app'>
			{/* <Register />
			<Login/> */}
			<Router>
				<Header />
				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/productpage'>
						<ProductPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
