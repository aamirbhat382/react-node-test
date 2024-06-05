import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./LoginPage.css";
import axios from "axios";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const API_URL = "http://localhost:8000/api/register";
    const user = { ...data };
    axios
      .post(API_URL, user)
      .then((response) => {
        if (response.data.success === true) {
          alert("User registration successful");
          window.location.href = "/login";
        } else {
          alert("User registration failed");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("User registration failed");
      });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center login-container"
    >
      <Row>
        <Col>
          <Card className="login-card">
            <div className="card-header d-flex justify-center">
              <div>
                <img
                  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
                  alt="Profile"
                  className="profile-img bg-light"
                />
                <div>
                  <h2 className="login-title text-light">Register</h2>
                </div>
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
                    placeholder="Name"
                    className="input-field"
                    {...register("name", { required: true })}
                  />
                </Form.Group>
                {errors.name && (
                  <span className="text-warning">Name is required</span>
                )}

                <Form.Group className="mb-3 input-group">
                  <span className="input-group-text bg-dark text-white">
                    <i className="bi bi-calendar-fill"></i>
                  </span>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    className="input-field"
                    {...register("dob", { required: true })}
                  />
                </Form.Group>
                {errors.dob && (
                  <span className="text-warning">
                    Date of Birth is required
                  </span>
                )}

                <Form.Group className="mb-3 input-group">
                  <span className="input-group-text bg-dark text-white">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    {...register("email", { required: true })}
                  />
                </Form.Group>
                {errors.email && (
                  <span className="text-warning">Email is required</span>
                )}

                <Form.Group className="mb-3 input-group">
                  <span className="input-group-text bg-dark text-white">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    {...register("password", { required: true })}
                  />
                </Form.Group>
                {errors.password && (
                  <span className="text-warning">Password is required</span>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="login-button w-100"
                >
                  REGISTER
                </Button>
              </Form>
      
              <div className="d-flex justify-content-center mt-3">
                <a href="/login" className="form-text text-light">
                  Already registered? Login
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
