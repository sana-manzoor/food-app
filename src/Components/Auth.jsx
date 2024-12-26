import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import logo from '../Assets/l4.jpg';
import './Auth.css';
import { Link } from 'react-router-dom';
import { registerApi, loginApi } from '../Services/allApis';
import { useNavigate } from 'react-router-dom';

function Auth({ register }) {
  const registerForm = register ? true : false;
  const [userData, setUserData] = useState({ username: "", address: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!userData.username || !userData.address || !userData.email || !userData.password) {
      toast.error("Enter Valid Values!!");
    } else {
      const res = await registerApi(userData);
      if (res.status === 200) {
        toast.success(`Registration of ${res.data.username} is Successfull!!`);
        setUserData({ username: "", address: "", email: "", password: "" });
        navigate('/login');
      } else {
        toast.error(res.response);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("Enter Email and Password!!");
    } else {
      const res = await loginApi(userData);
      if (res.status === 200) {
        localStorage.setItem("currentUser", JSON.stringify(res.data.excistingUser._id));
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uname", JSON.stringify(res.data.excistingUser.username));
        toast.success("Login Successfull!!");
        setUserData({ email: "", password: "" });

        if (localStorage.getItem("role") === "admin") {
          navigate('/admindashboard');
        } else {
          navigate('/');
        }
      } else {
        toast.error("Login Failed!!");
      }
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='border shadow p-4 w-100'>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center mb-3'>
          <i className="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
          <span className='btn text-center p-0 m-0'></span>
        </Link>

        <div className='text-center mb-3'>
          <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '160px', height: 'auto' }} />
        </div>

        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-3">
            <img src="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png" className="img-fluid" alt="Burger" />
          </Col>

          <Col xs={12} md={6}>
            <div className='d-flex align-items-center flex-column'>
              <form className='w-100'>
                {registerForm && (
                  <>
                    <Form.Group as={Row} className="mb-3" controlId="username">
                      <Form.Label column sm="2">Username:</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Name"
                          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="address">
                      <Form.Label column sm="2">Address:</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          as="textarea"
                          placeholder="Enter Your Address"
                          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                        />
                      </Col>
                    </Form.Group>
                  </>
                )}

                <Form.Group as={Row} className="mb-3" controlId="email">
                  <Form.Label column sm="2">Email:</Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="password">
                  <Form.Label column sm="2">Password:</Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    />
                  </Col>
                </Form.Group>

                {registerForm ? (
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="outline-danger" className='btn m-4' onClick={handleRegistration}>SIGN UP</Button>
                    <Link to={'/login'} className='text-danger'>Already a User? Sign in..</Link>
                  </div>
                ) : (
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="outline-danger" className='btn m-4' onClick={handleLogin}>SIGN IN</Button>
                    <Link to={'/register'} className='text-danger'>New User? Sign Up..</Link>
                  </div>
                )}
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Auth;
