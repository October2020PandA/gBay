import React, {useState} from "react"
import axios from "axios"

const NewProduct = () => {

const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [atype,setAtype] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [rating, setRating] = useState("");
const [image, setImage] = useState("");


const createProduct = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/product-create/", {
      name, desc, atype, price, quantity, rating, image
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

    return (

      
      <div className="container" style={{boxShadow: "0px 2px 15px"}}>
        <form onSubmit={createProduct}>
                <h2>Add a Product</h2>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="desc">Description:</label>
                    <input type="text" className="form-control" name="desc" onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="atype">Type:</label>
                    <input type="text" className="form-control" name="atype" onChange={(e) => setAtype(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="price">Price:</label>
                    <input type="text" className="form-control" name="price" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="number" className="form-control" name="quantity" onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="rating">Rating:</label>
                    <input type="number" className="form-control" name="rating" onChange={(e) => setRating(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="rating">Image:</label>
                    <input type="text" className="form-control" name="image" onChange={(e) => setImage(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" style={{display: "inline-block"}}>Submit</button>
        </form>
        <a href="/products"><button type="submit" className="btn btn-warning" style={{display: "inline-block"}}>Cancel</button></a>

      </div>
    )
}

export default NewProduct