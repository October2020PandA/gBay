import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Router, Link} from "@reach/router"
import './App.css';
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"
import Login from "./components/Login"
import NewProduct from "./components/NewProduct"
import Register from "./components/Register"


function App() {

  return (
    <div className="App">
      <Router>
        <ProductList path="/products/"/>
        <Detail path="/detail"/>
        <Login path="/login"/>
        <Register path="/register"/>
        <NewProduct path="/new"/>
      </Router>
    </div>
  );
}

export default App;
