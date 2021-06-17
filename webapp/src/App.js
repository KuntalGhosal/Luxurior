import './App.css';
import React from 'react';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './screens/Home';
import About from "./components/About";
import Footer from "./components/Footer";
import Recidancialestimate from "./components/Recidancialestimate";
import Comarcialestimate from "./components/Comarcialestimate";
import Whyluxriror from "./components/Whyluxriror";
import Recidancialimages from "./components/Recidancialimages";
import Comarcialimages from "./components/Comarcialimages";
import Whiteroom from "./components/Whiteroom.jsx";
import Blueroom from "./components/Blueroom";
import Woodenroom from "./components/Woodenroom.jsx";
import Likeoldroom from "./components/Likeoldroom";
import Hotelandcafe from './components/Hotelandcafe';
import Library from './components/Library';
import Office from './components/Office';
import Alltimefooter from './components/Alltimefooter';
import Designgallary from "./components/Designgallary";
import Ourservices from  "./components/Ourservices"
import Designerbathroom from "./components/Designerbathroom.jsx"
import Designerbedroom from "./components/Designerbedroom.jsx"
import Modularkitchen from "./components/Modularkitchen.jsx"
import Contactus from './components/Contactus';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <div>
            <Navigation/>
            <Alltimefooter/>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/recidancialestimate" component={Recidancialestimate}/>
                <Route path="/comarcialestimate" component={Comarcialestimate}/>
                <Route path="/whyluxriror" component={Whyluxriror}/>
                <Route path="/recidancialimages" component={Recidancialimages}/>
                <Route path="/comarcialimages" component={Comarcialimages}/>
                <Route path="/whiteroom" component={Whiteroom}/>
                <Route path="/blueroom" component={Blueroom}/>
                <Route path="/woodenroom" component={Woodenroom}/>
                <Route path="/likeoldroom" component={Likeoldroom}/>
                <Route path="/hotelandcafe" component={Hotelandcafe}/>
                <Route path="/library" component={Library}/>
                <Route path="/office" component={Office}/>
                <Route path="/designgallary" component={Designgallary}/>
                <Route path="/ourservices" component={Ourservices}/>
                <Route path="/designerbathroom" component={Designerbathroom}/>
                <Route path="/designerbedroom" component={Designerbedroom}/>
                <Route path="/modularkitchen" component={Modularkitchen}/>
                <Route path="/contactus" component={Contactus}/>
            </Switch>
            <Footer/>
        </div>
        </Router>
        
    </div>
  );
}

export default App;
