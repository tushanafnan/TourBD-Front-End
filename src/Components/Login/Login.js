import React,{useState} from 'react';


import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';




const Login = () => {
    const {signInUsingGoogle, loginUserWithEmail} = useAuth ();
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from|| '/home';
   
    const handleEmail= (e) => {
        setEmail(e.target.value)
    }
    const handlePassword= (e) => {
        setPassword(e.target.value)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        loginUserWithEmail(email,password)
        .then(result => {
            history.push(redirect_uri);
        })

    }
    
    
    
        return (
        <div className="container">
            <form onSubmit={handleLogin} className="w-50 mx-auto mt-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className=" text-center btn btn-primary">Login</button>
</form>
<div className="text-center fs-4 text-white mx-auto">
<div> <p> Dont have an account ? <br />  <Link to="signup">Join Us</Link>  Today </p></div>
<br />
--------- Or ----------
<br />
<br />
 <div > <button onClick={handleGoogleLogin} className="btn btn-primary"><i class=" pe-1 fab fa-google"></i> Google Sign In</button> </div>
        </div>
        </div>
    );
};

export default Login;