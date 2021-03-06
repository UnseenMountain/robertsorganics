import React from 'react';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import organics from "./components/organics/organics" 
import Blog from "./components/Blog/Blog"
import Recipes from "./components/Recipes/Recipes"
import Store from "./components/Store/Store"
import Footer from "./components/Footer/Footer.js"
import Home from "./components/Home/Home"


function App() {
  return (
    <Router>
      <div>

        <NavBar />
        <Route path="/" exact component={Home}/> 
         <Route path="/organics" component={organics}/>
       
        <Route path="/Blog" component={Blog}/>
        <Route path="/Recipes" component={Recipes}/>
        <Route path="/Store" component={Store}/> 
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
