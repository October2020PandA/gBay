import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "@reach/router"

const productStyle = {
    height: "200px",
    width: "210px",
    backgroundColor: "red",
    display: "inline-block",
    marginRight: "15px",
    marginBottom: "15px"
}

const buttonStyle = {
    marginRight: "1035px",
    marginBottom: "25px"
}

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
      .get("http://localhost:8000/product-list/")
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to="/register">Register</Link>
            <h1>Product List</h1>
            <Link to="/new">
                <button style={buttonStyle}>Add Product</button>
            </Link>
      {products.map(({image, name, desc, atype, price, quantity, rating, user}) => (
        //Going to remove this styling portion, this is for show 
        <div 
            style={{
            display: "inline-block",
            marginRight: "15px",
            marginBottom: "15px"}}>
          <img src={image} alt="photo of image"/>
          <p><b>Name:</b> {name}</p>
          <p><b>Description:</b> {desc}</p>
          <p><b>Category:</b> {atype}</p>
          <p><b>Price:</b> {price}</p>
          <p><b>Quantity:</b> {quantity}</p>
          <p><b>Rating:</b> {rating}</p>
          <p><b>User:</b> {user}</p>
        </div>
      ))}   
        </div>
    )
}

export default ProductList