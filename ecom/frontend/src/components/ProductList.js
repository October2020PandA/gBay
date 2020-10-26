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
    marginBottom: "25px",
    width: "150px"
}

const ProductList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
      .get("http://localhost:8000/product-list/")
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
    }, [])

    return (
      <div className="container">
        <div>
            <Link to="/register">Register</Link>
            <h1>Product List</h1>
            <Link to="/new">
                <button style={buttonStyle}>Add Product</button>
            </Link>
      {products.map((product) => (
        //Going to remove this styling portion, this is for show 
        <div 
            style={{
            display: "inline-block",
            marginRight: "15px",
            marginBottom: "15px",
            boxShadow: "0px 2px 15px",
            padding: "10px",
            width: "250px",
            height: "500px",
            verticalAlign: "top",}}>
              
          <Link to={"/product-detail/" + product.id}>
            <p><b>Name:</b> {product.name}</p>
          </Link>
          <p><b>Description:</b> {product.desc}</p>
          <p><b>Category:</b> {product.atype}</p>
          <p><b>Price:</b> {product.price}</p>
          <p><b>Quantity:</b> {product.quantity}</p>
          <p><b>Rating:</b> {product.rating}</p>
          <p><b>User:</b> {product.user}</p>
          <img src="http://localhost:8000/media/post_images/dog.jpg" style={{width: "100px",}}alt="photo of image"/>
          <button type="submit" className="btn btn-primary" style={{display: "inline-block", margin: "25px"}}>Contact seller</button>
        </div>
      ))}   <img src="http://localhost:8000/{product.image}" alt="photo of image"></img>
        </div>
        </div>
    )
    
}

export default ProductList


