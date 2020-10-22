import React, {useState, useEffect} from "react"
import {Link} from "@reach/router"
import axios from "axios"

const Detail = () => {

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
        <div>
            <Link to="/products">Go Home</Link>
            <h3>New Product</h3>

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
        </div>

    )
}

export default Detail