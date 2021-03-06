import React, {useState, useEffect} from "react"
import {Link} from "@reach/router"





const Login = () => {
    return (
        <div>

            <div class="login-form">
                <form action="" method="post">
                    <h2 class="text-center">Log in</h2>       
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div class="clearfix">
                        <label class="float-left form-check-label"></label>
                    </div>        
                </form>
                <p class="text-center"><a href="/register">Create an Account</a></p>
            </div>

        </div>
    )
}

export default Login