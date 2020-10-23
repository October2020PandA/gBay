import { navigate } from "@reach/router";
import axios from "axios";
import React, {useState, useEffect} from "react"

const Edit = (props) => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [atype,setAtype] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        axios
          .get("http://localhost:8000/product-detail/" + props.id)
          .then((res) => {
            setName(res.data.name);
            setDesc(res.data.desc);
            setAtype(res.data.atype);
            setPrice(res.data.price);
            setQuantity(res.data.quantity);
            setRating(res.data.rating);
          })
          .catch((err) => console.log(err));
      }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/product-update/" + props.id, {
            name, desc, atype, price, quantity, rating
        })
        .then((res) => navigate("/products"))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="atype" value={atype} onChange={(e) => setAtype(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="text" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Edit