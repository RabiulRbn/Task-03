import React, { useState } from 'react';
import { Button, Form, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState('');
    const [error, seterror] = useState('');
    const handleOnChange = e => {
        // console.log(e)
        if (e.target.name === 'name') {

            setName(e.target.value)
        }
        if (e.target.name === 'email') {

            setEmail(e.target.value)
        }
        if (e.target.name === 'mobile') {

            setMobile(e.target.value)
        }
        if (e.target.name === 'password') {

            setPassword(e.target.value)
        }






    }

    const handleLoginSubmit = e => {
        // console.log(e)
        const registerData = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        }
        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', registerData)
            .then(data => {
                console.log(data.status)
                if (data.status === 200) {
                    seterror('');
                    setSuccessful('Registration is successful')
                }
                else {
                    setSuccessful('');
                    seterror('Failed Registration')
                }

            })

        e.preventDefault();
    }
    return (
        <div>
            <h2 className="mt-3" >Please Register</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label> <br />
                    <Form.Control onChange={handleOnChange} name="name" className="w-25 mx-auto" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Contact number</Form.Label> <br />
                    <Form.Control onChange={handleOnChange} name="mobile" className="w-25 mx-auto" type="number" placeholder="Your Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label> <br />
                    <Form.Control onChange={handleOnChange} name="email" className="w-25 mx-auto" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label> <br />
                    <Form.Control onChange={handleOnChange} name="password" className="w-25 mx-auto " type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Already register? Please Login </Button>
                </Link>
                {
                    error && <p>{error}</p>
                }
                {
                    successful && <p>{successful}</p>
                }
            </Form>


        </div>

    );
};

export default Register;