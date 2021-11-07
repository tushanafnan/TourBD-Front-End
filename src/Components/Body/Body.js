import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {

    const history = useHistory();
 
    return (
        
        <div className='header'>
            <section className='mx-auto pb-5'>
            <div  className="container">
            <div className="row">
           <div className="col-12 col-md-6 mt-5 "> 
           <h1 className="fs-1"> 
            <span className="text-color fs-1"> Looking For Affordable Tour?</span> <br />
                <span className="fs-lg-3 text-white"> Check Out Our Package </span><br /> 
                <button onClick={() => history.push('/contact')} className="btn btn-color text-center mt-5"> LEARN MORE</button>
            </h1>
            </div>
            {/* <div className="col-12 col-md-6 d-flex justify-content-center" ><img className="img-men" src="https://lp-cms-production.imgix.net/2021-10/GettyImages-1145406277.jpg" alt="" /></div> */}
            </div>
            </div>
            </section>
            </div>
                    );
                    };

export default Body;