import React from 'react';
import {Router} from "@reach/router"
import './App.css';
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <ProductList path="/products/"/>
        <Detail path="/detail"/>
      </Router>
    </div>
  );
}

export default App;
