import React from "react"
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
    return (
        <div>
            <h1>Product List</h1>
            <button style={buttonStyle}>Add Product</button>
             <div>
                 <Link to="/detail">
                    <div style={productStyle}><b>Box1</b></div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}><b>Box2</b></div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}><b>Box3</b></div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}><b>Box4</b></div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}><b>Box5</b></div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box6</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box7</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box8</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box9</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box10</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box11</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box12</div>
                </Link>
                <Link to="/detail">
                    <div style={productStyle}>Box13</div>
                </Link>
             </div>
        </div>
    )
}

export default ProductList