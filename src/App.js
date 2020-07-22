import React from 'react';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home" 
import Blog from "./components/Blog/Blog"
import Recipes from "./components/Recipes/Recipes"
import Store from "./components/Store/Store"
import Footer from "./components/Footer/Footer.js"
import Home2 from "./components/Home2/Home2"


function App() {
  return (
    <Router>
      <div>

        <NavBar />
        <Route path="/" exact component={Home2}/> 
         <Route path="/Home" component={Home}/>
       
        <Route path="/Blog" component={Blog}/>
        <Route path="/Recipes" component={Recipes}/>
        <Route path="/Store" component={Store}/> 
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
