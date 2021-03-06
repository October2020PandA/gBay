import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, navigate} from "@reach/router"

const Detail = (props) => {

    const [product, setProduct] = useState({})

useEffect(() => {
    axios
    .get("http://localhost:8000/product-detail/" + props.id)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
}, [])

const deleteProduct = () => {
    axios
    .delete("http://localhost:8000/product-delete/" + props.id)
    .then((data) => navigate("/products"))
    .catch((err) => console.log(err))
}

    return (
        <div className="container" style={{textAlign: "center", boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",}}>
            <div>
                <Link to="/products">Go Home</Link>
                <h3>Product Information</h3>
                <img src={`http://localhost:8000`+product.image} style={{width: "100px"}}style={{width: "140px", height: "140px", marginLeft: "15px",}}alt="photo of image"/>
                <h3>{product.name}</h3>
                <p><b>Category:</b> {product.atype}</p>
                <p><b>Description:</b> {product.desc}</p>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Rating:</b> {product.rating}</p>
            </div>
            <div>
                <button onClick={deleteProduct} className="btn btn-warning">Delete</button>
            </div>
            <div>
                <Link to={"/product-update/" + product.id}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail