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
import Recidancialestimate from "./components/Recidancialestimate";
import Comarcialestimate from "./components/Comarcialestimate";
import Whyluxriror from "./components/Whyluxriror";
function App() {
  return (
    <div>
      <Router>
        <div>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/recidancialestimate" component={Recidancialestimate}/>
                <Route path="/comarcialestimate" component={Comarcialestimate}/>
                <Route path="/whyluxriror" component={Whyluxriror}/>
            </Switch>
            <Footer/>
        </div>
        </Router>
    </div>
  );
}

export default App;
