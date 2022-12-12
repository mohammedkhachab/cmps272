import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Home />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
