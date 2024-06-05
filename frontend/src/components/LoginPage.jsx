import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();
 
  const onSubmit = (data) => {
    const API_URL = "http://localhost:8000/api/login";
    const user = { ...data };
    axios
      .post(API_URL, user)
      .then((response) => {
        if (response.data.success === true) {
          window.localStorage.setItem("user", JSON.stringify(response.data.data.user))      
          login(response.data.data.token);
          navigate("/dashboard");

        } else {
          alert("Login failed");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed");
      });
  };

  return (
      <Container fluid className="d-flex justify-content-center align-items-center login-container">
       
      <Row>
        <Col>
          <Card className="login-card">
            <div className="card-header d-flex justify-center">
                <div>
              <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" alt="Profile" className="profile-img bg-light" />
              <h2 className="login-title">Sign In</h2>
            </div>
            </div>
            <Card.Body className="card-body">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 input-group">
                  <span className="input-group-text bg-dark text-white">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    {...register('username', { required: true })}
                  />
                </Form.Group>
                  {errors.username && <p className="text-warning">Username is required</p>}

                <Form.Group className="mb-3 input-group">
                  <span className="input-group-text bg-dark text-white">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    {...register('password', { required: true })}
                  />
                </Form.Group>
                  {errors.password && <p className="text-warning">Password is required</p>}

                <Form.Group className="mb-3 d-flex justify-content-between">
                  <Form.Check type="checkbox" label="Remember me" className="form-text text-light" />
                  <a href="/register" className="form-text text-light">New User?</a>
                </Form.Group>

                <Button variant="primary" type="submit" className="login-button w-100">LOGIN</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
