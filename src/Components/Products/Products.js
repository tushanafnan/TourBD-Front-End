import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Prodcuts.css'

const Products = () => {
    const [course, setCourse] = useState ([]);
    useEffect (()=> {

fetch ('https://eerie-eyeballs-83616.herokuapp.com/products')
.then (res => res.json ())
.then (data => setCourse(data))
    }, [] )
    return (
<div>
  <br /> <br /> <br />
  <div className='container mx-auto text-center mb-5'>
    <h1 className="fs-1 ps-3 mb-5 text-dark"> Our Affordable Package </h1>
        <div className="row text-center">
        <div className="col-md-12">
    
        <div className="row g-4 row-cols-1 row-cols-md-4 ms-2 row-solve">
              
        {course.map ( sub => <Product key= {sub.name} sub={sub}></Product>)}
              
        </div>
        </div>
        </div>

        <h1 className="fs-1 text-center mt-lg-5 mb-lg-5 text-dark pb-5"> <br /> No Judgments are the Best Kind <br /> <p className="mt-2"> <h6> Differences are encouraged. Quirks are welcomed. </h6></p></h1>

        <div className="card-group">
  <div className="card mx-3">
    <img src="https://dj7w0h47bhjwk.cloudfront.net/assets/illustration--positivity-light-400-93e6eaa31ffe5bf8c0f80e0a7f15f90c64f6a82737a11e6b2a510500e137c016.png" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">POSITIVITY</h5>
      <p className="card-text text-center ">We are nurturers: we seek only to encourage, entertain, and empower.</p>
     
    </div>
  </div>
  <div className="card mx-3">
    <img src="https://dj7w0h47bhjwk.cloudfront.net/assets/illustration--inclusivity-light-400-09aff2bed351817c782bd57695ad13ffd31e2b5f6a311c4169e92c087bd1aa95.png" className="card-img-top img-fluid  " alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">INCLUSIVITY</h5>
      <p className="card-text text-center">Here we keep open minds. There is no one type or way in our diverse community. Come as you are!</p>
      
    </div>
  </div>
  <div className="card mx-3">
    <img src="https://dj7w0h47bhjwk.cloudfront.net/assets/illustration--fun-light-400-1ab8ad2a8f2e1c05f1b5191853e02fb11e9e7f9eab61cc560b2a9eec0cf8a9ef.png" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">FUN</h5>
      <p className="card-text text-center">We know serious fitness is hard, but that doesn’t mean it can’t be an edge-of-your-seat, can’t-get-enough, look-forward-to-your-workouts party.</p>
      
    </div>
  </div>
  </div>
</div>


        </div>
          
       
    );
};

export default Products;