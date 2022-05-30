import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navebar.css'

const Navebar = () => {
    return(
        <>
    <Navbar collapseOnSelect expand="lg" sticky="top" className='bg'>
      <Container>
      <Navbar.Brand as={Link} to="/" style={{width:"50%"}}>
  
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav"style={{marginRight:"%"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mx-auto">
           <Nav.Link as={Link} to="/">Home</Nav.Link>
           <Nav.Link as={Link} to="/service">Service</Nav.Link>
           <Nav.Link as={Link} to='/about' >About</Nav.Link>
           <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
           <Nav.Link as={Link} to="/checkout"></Nav.Link>
         </Nav>
         <div className='d-flex login'>
    
           <Link as={Link} to="/login">Login</Link>
        
           <Link as={Link} to="/register">Registration</Link>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
};

export default Navebar;