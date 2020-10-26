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


        <div className="container" style={{boxShadow: "0px 2px 15px"}}>
            <form onSubmit={updateProduct}>
                <h2>Update</h2>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="desc">Description:</label>
                    <input type="text" className="form-control" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="atype">Type:</label>
                    <input type="text" className="form-control" name="atype" value={atype} onChange={(e) => setAtype(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="price">Price:</label>
                    <input type="text" className="form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="number" className="form-control" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="rating">Rating:</label>
                    <input type="number" className="form-control" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
      
                <button type="submit" className="btn btn-primary" style={{display: "inline-block"}}>Submit</button>
            </form>
        <a href="/products"><button type="submit" className="btn btn-warning" style={{display: "inline-block"}}>Cancel</button></a>

      </div>
    )
}
export default Edit