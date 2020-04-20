import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Blog from "./components/Blog/Blog"
import Store from "./components/Store/Store"
import Footer from "./components/Footer/Footer.js"


function App() {
  return (
   <Router>
    <div>
<NavBar/>

<Blog/>
   <Store/>
   <Footer/>  
    </div>
   </Router>
  );
}

export default App;
