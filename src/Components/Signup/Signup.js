import React ,{useState}from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Signup = () => {
const { registerUserWithEmail} = useAuth ();
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')

const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home';


const handleEmail= (e) => {
    setEmail(e.target.value)
}
const handlePassword= (e) => {
    setPassword(e.target.value)
}
 const handleRegistration = (e) => {
e.preventDefault()
    registerUserWithEmail (email, password)
    .then(result => {
      history.push(redirect_uri);
  })
 }
 

    return (
        <div className="container">
            <form onSubmit={handleRegistration}className="w-50 mx-auto mt-5">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>

<div className=" fs-4 text-center mx-auto text-white"> Already have an account ? <br /> <Link to="/login">Log In</Link> </div>
        </div>
    );
};

export default Signup;