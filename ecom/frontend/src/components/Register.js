import React, {useEffect, useState} from "react"
import {Link, navigate} from "@reach/router"
import axios from "axios"



const Register = () => {

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [user_name,setUser_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/user-create/", {
            first_name, last_name, user_name, email, password, confirmPass 
        })
        .then((res) => console.log(res))
        .then((res) => navigate("/products/"))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            
            <div class="signup-form">
            {/* action="/register" method="POST" */}
                <form onSubmit={createUser}>
                    <h2>Register</h2>
                    <div class="form-group">
                        <div class="row">
                            <div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" onChange={(e) => setFirst_name(e.target.value)}/></div>
                            <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" onChange={(e) => setLast_name(e.target.value)}/></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="user_name" placeholder="User Name" required="required" onChange={(e) => setUser_name(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder="Email" required="required" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="required" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="confirmPass" placeholder="Confirm Password" required="required" onChange={(e) => setConfirmPass(e.target.value)}/>
                    </div>

                    <div class="form-group">
                            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div class="text-center">Already have an account? <a href="#">Sign in</a></div>
            </div>
        </div>
    )
}

export default Register