import logo from './logo.svg';
import './App.css';
// import Home from './screens/Home';
import React from 'react';
import Navigation from "./components/Navigation";
// import About from "./About";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './screens/Home';
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About}/>
            </Switch>
            <Footer/>
        </div>
        </Router>
    </div>
  );
}

export default App;
