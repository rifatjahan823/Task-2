import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navebar.css'
import logo from '../../img/Screenshot_2.png'

const Navebar = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
          <Container> 
            <Navbar.Brand as={Link} to="/">
            <img style={{width:"50px",height:"50px"}} className='img-fluid ' src={logo} alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link href='/#product' >Product & Service</Nav.Link>
              <Nav.Link href='/#client'>Become a Client</Nav.Link>
              <Nav.Link href='/#about'>Abouut Us</Nav.Link>
             </Nav>
               <div className='d-flex login'>

               <Link as={Link} to="/login">Login</Link>
    
               <Link as={Link} to="/signup">SignUp</Link>
               </div>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
};

export default Navebar;