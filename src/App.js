import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Home2" component={Home2}/>
        <Route exact path="/Home3" component={Home3}/>
        <Route exact path="/Contact" component={Contact}/>
        </div>
      </div>
    </Router>

    );
}

export default App;
