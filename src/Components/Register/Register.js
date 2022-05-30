
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const onsubmit = event =>{
        event.preventDefault();
    }
    return (
        <div className='container'>
          <div className='row g-4 align-items-center my-5'>
                <div className='col-md-6 col-12 '>
                <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className='form-btn' type="submit">
            Register
        </Button>
        </Form>
         </div>
        <div className='col-md-6 col-12'> 
        <img className='img-fluid' src="https://www.onebharatpharmacy.com/login/svg/login-image.svg" alt="" />
         </div>
          </div>
        </div>
    );
};

export default Register;