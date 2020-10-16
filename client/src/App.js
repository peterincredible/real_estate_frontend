import React from 'react';
import Home from "./components/home";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Development from "./components/development";
import Contact from "./components/contact";
import News from "./components/news";
import Property from "./components/property";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import './App.css';
import "./styles/main.css";

function App() {
  return (
    <div className="main">
      <Router>
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <Switch>
                      <Redirect from="/" exact to="/home"/>
                      <Route path="/home" exact component={Home}/>
                      <Route path="/about" exact component={About}/>
                      <Route path="/news" exact component={News}/>
                      <Route path="/development" exact component={Development}/>
                      <Route path="/property" exact component={Property}/>
                      <Route path="/Contact" exact component={Contact}/>
                </Switch>
            </div>
            <div className="footer">
                <Footer/>
            </div>
      </Router>
    </div>
  );
}

export default App;
