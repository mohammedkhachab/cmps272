import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import SearchPage from "./Component/SearchPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
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
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
  