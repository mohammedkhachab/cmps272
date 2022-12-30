import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SearchPage from './Component/SearchPage';
import Productpage from './Component/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Component/Login';

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
					<Route path='/'>
						<Home />
					</Route>
					{/* <Route path="/productpage" component={Productpage}>
            <Productpage />
        </Route> */}
					<Route path='/login' component={Login}>
						<Login />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
