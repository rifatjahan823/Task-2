import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navebar.css'
import logo from '../../img/logo.png'

const Navebar = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
          <Container> 
            <Navbar.Brand as={Link} to="/">
            <img style={{width:"60px",height:"60px"}} className='img-fluid ' src={logo} alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link href='/#product' >Product & Service</Nav.Link>
              <Nav.Link href='/#client'>Become a Client</Nav.Link>
              <Nav.Link href='/#about'>About Us</Nav.Link>
             </Nav>
               <div className='d-flex login'>

               <Link as={Link} to="/login">Login</Link>
    
               <Link as={Link} to="/register">SignUp</Link>
               </div>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
};

export default Navebar;