import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SearchPage from "./Component/SearchPage";
import Productpage from "./Component/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Component/Register";

function App() {
  return (
    // BEM
    <div className="app">
     
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
          {/* <Route path="/productpage" component={Productpage}>
            <Productpage />
        </Route> */}
         </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
