
import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, ButtonGroup, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'
import useAuth from './../../hooks/useAuth';

const Header = () => {
  const {user,handleLogOut}=useAuth();
    return (
        <div className="nav-position">
        <Navbar  bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home"> <img className="logo"src="https://tour.com.bd/uploads/global/logo.png" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto fs-5">
        
        <Link to="/home" className="items" >Home</Link>
        <Link to="/about" className="items" >About Us</Link>
        <Link to="/contact" className="items" >Contact Us</Link>
        <Link to="/privacy" className="items" >Privacy Policy</Link>

      
        {user?.email && (
          <span className="d-flex  ps-5">
            <span>
             <small> <em>Hi, {user.displayName || <b> Name Not Found</b>}</em></small>
            </span>
          </span>
        )}
        
       { user.email && 
        
          //Dropdown Button Here


                      <Dropdown className='ps-3'>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item> <Link to="/myorder" className='sub-dropdowns'>My Orders</Link></Dropdown.Item>
              <Dropdown.Item> <Link to="/manageorder" className='sub-dropdowns'>Manage Orders </Link></Dropdown.Item>
               <Dropdown.Item> <Link to="/newservice" className='sub-dropdowns'>Add A New Service </Link></Dropdown.Item>
               </Dropdown.Menu>

              </Dropdown>
              
             

        }

{ user.email ?
         <button onClick={handleLogOut} className="btn bg-danger ms-3 text-white">Log Out</button> 
         :  
         <Link to="/login"> <button className="btn bg-white border ms-xxl-5 ps-3" >LOGIN</button> </Link>
         
        }

       {! user.email && <Link to="/signup"><button className="btn bg-warning ms-3">SIGN UP</button></Link>
        }
        </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar> 
          
          </div>
        
    );
};

export default Header;