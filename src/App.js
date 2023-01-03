import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SearchPage from './Component/SearchPage';
import ProductPage from './Component/ProductPage';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './Component/AboutUs';
import History from './Component/History';
import ContactUs from './Component/ContactUs';

function App() {
	return (
		// BEM
		<div className='app'>
			<Router>
				<Header />
				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/aboutus' component={AboutUs}>
						<AboutUs />
					</Route>
					<Route path='/history' component={History}>
						<History />
					</Route>
					<Route path='/contactus' component={ContactUs}>
						<ContactUs />
					</Route>
					<Route path='/productpage' component={ProductPage}>
						<ProductPage />
					</Route>{' '}
					<Route path='/login' component={Login}>
						<Login />
					</Route>
					<Route path='/register' component={Register}>
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Router>
			{/* <AboutUs /> */}
		</div>
	);
}

export default App;
