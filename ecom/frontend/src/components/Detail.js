import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "@reach/router"

const Detail = (props) => {

    const [product, setProduct] = useState({})

useEffect(() => {
    axios
    .get("http://localhost:8000/product-detail/" + props.id)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
}, [])

    return (
        <div>
            <Link to="/products">Go Home</Link>
            <h3>Product Information</h3>
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <p>{product.atype}</p>
            <p>{product.desc}</p>
            <p>{product.atype}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
        </div>
    )
}

export default Detail