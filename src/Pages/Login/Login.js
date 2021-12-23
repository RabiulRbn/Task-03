import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button,Form, NavLink } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import { Form Group} from 'react-bootstrap';
// import Form from 'react-bootstrap/From';

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState('');
    const [error, seterror] = useState('');
    console.log(error)

    const handleOnChange = e => {
        if (e.target.name === 'email') {

            setEmail(e.target.value)
        }
        
        if (e.target.name === 'password') {

            setPassword(e.target.value)
        }
       
    }
    const handleLoginSubmit = e => {
        // console.log(e)
        const loginData = {
            
            email: email,
            password: password
        }
        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin', loginData)
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    
                    history.push("/empty");
                }
                else {
                    seterror('Failed login');
                    
                }

            })

        e.preventDefault();
    }
    return (
        <div className="mt-5">
            <h2 className="mt-3" >Please Login</h2>
            <Form onSubmit={handleLoginSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label> <br />
                    <Form.Control onChange={handleOnChange} className="w-25 mx-auto" name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label> <br />
                    <Form.Control onChange={handleOnChange} className="w-25 mx-auto "  name="password"  type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </Link>
                {
                    error && <p>{error}</p>
                }
               
            </Form>
        </div>
    );
};

export default Login;