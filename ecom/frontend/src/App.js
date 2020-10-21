import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Router} from "@reach/router"
import './App.css';
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"


function App() {

const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8000/product-list/")
  .then((res) => setProducts(res.data))
  .catch(err => console.log(err))
  console.log(products)
}, [])

//This bottom piece of code is to create products

const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [category,setCategory] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [rating, setRating] = useState("");

const createProduct = (e) => {
  e.preventDefault();
  axios.post("http://localhost:8000/product-detail/", {
    name, desc, category, price, quantity, rating
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

  return (
    <div className="App">
      <h1>Products</h1>
      {products.map((product) => (
        //Going to remove this styling portion, this is for show 
        <div style={{display: "inline-block",
        marginRight: "15px",
        marginBottom: "15px"}}>
          {/* <img src={product.image}/> */}
          <p><b>Name:</b> {product.name}</p>
          <p><b>Description:</b> {product.desc}</p>
          <p><b>Category:</b> {product.atype}</p>
          <p><b>Price:</b> {product.price}</p>
          <p><b>Quantity:</b> {product.quantity}</p>
          <p><b>Rating:</b> {product.rating}</p>
        </div>
      ))}
      <p>___________________________________________________________________________________________________________________</p>

      <h1>Create Product</h1>

      <form onSubmit={createProduct}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)}/>
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="atype" onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
          <label>Quantity:</label>
          <input type="text" name="quantity" onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" name="rating" onChange={(e) => setRating(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* <Router>
        <ProductList path="/products/"/>
        <Detail path="/detail"/>
      </Router> */}
    </div>
  );
}

export default App;
