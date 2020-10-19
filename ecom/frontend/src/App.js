import React from 'react';
import logo from './logo.svg';
import {Router} from "@reach/router"
import './App.css';
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"


function App() {
  return (
    <div className="App">
      <Router>
        <ProductList path="/products"/>
        <Detail path="/detail"/>
      </Router>
    </div>
  );
}

export default App;
