import React from 'react';
import {Router} from "@reach/router"
import './App.css';
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"
import Login from "./components/Login"
import NewProduct from "./components/NewProduct"
import Register from "./components/Register"
import Edit from "./components/Edit"


function App() {

  return (
    <div className="App">
      <Router>
        <ProductList path="/products/"/>
        <Detail path="/product-detail/:id"/>
        <Login path="/login"/>
        <Register path="/register"/>
        <NewProduct path="/new"/>
        <Edit path="/product-update/:id"/>
      </Router>

      {/* const rootEl = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <MasterPage />
            </Route>
            <Route exact path="/details/:id" >
                <DetailsPage />
            </Route>
        </Switch>
    </BrowserRouter>,
    rootEl
); */}

    </div>
  );
}

export default App;
