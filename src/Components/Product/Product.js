import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, url, id, location, description, price} = props.sub || {};
    
    const history = useHistory();


    return (
        // <div className='container'>

            <div className='col'>
                <div className='card text-center bg-secondary bg-gradient'>

            
  <Card >
    <Card.Img className='card-img-top h-100' variant="top" src={url} />
    <Card.Body>
      <Card.Title><small> {name} </small> </Card.Title>
      <Card.Text>
     <p className="fs-8"> <small> {description}</small> </p>
       </Card.Text>
      <Card.Text>
     Place : <b>{location}</b>
      
     
      </Card.Text>
      <Card.Text>
     Price : ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer >
    <button onClick={() => history.push('/orders')}  className='btn w-100 btn-warning'> <i class="fas fa-shopping-cart"></i> <b>BOOK NOW</b> </button>
    </Card.Footer>
  </Card>
                </div>

            </div>

     



    ); 

}
    /* return (
        <div className="col">
            
        <div className="card text-center h-100 bg-secondary bg-gradient"> 
        <div className="img-div"> <img src={url} className="card-img-top " alt=""/> </div>
        <div className="card-body text-light">
        <h5 className="card-title">{name}</h5>
        <div className="card-body"><h6> {description} <br /></h6> </div>
        <br />
        <div className="card-text"><h6> Country : {location} <br /></h6> </div>
       <br />
        <div className="card-text"><h6> Price : ${price} <br /></h6> </div>
        <div className="card-text mb-5 border-0 h-100 bg-transparent"> 

        <button onClick={() => history.push('/request')}  className='btn w-100 btn-warning'> <i class="fas fa-shopping-cart"></i> <b>BUY NOW</b> </button>
        </div>

      
        </div>
        </div>
    );
};
 */
export default Product;