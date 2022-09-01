import React, { useState } from "react";
import "./Login_Style.css";
import Container from "react-bootstrap/Container";
import NAVbar from "./NAVbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link,useNavigate } from "react-router-dom";
import Videobg from "./Videobg";

import axios from "axios";

export default function Login() {
  let Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault(); //to avoid reload

    let login_api = `http://localhost:4000/api/login`;
    if (email.length < 5 || password.length < 5) {
      return alert("Enter valid credentials");
    }
    let body = {
      email: email,
      password: password,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post(login_api, body, config)
      .then((res) => {
        if (res) {
          console.log(res);
          localStorage.clear();

          localStorage.setItem("Token", res.data.token);

          localStorage.setItem("user", JSON.stringify(res.data.userData));
          Navigate("/")
          alert(res.data.message);
        } else {
          console.log("no res recieved from server");
        }
      })
      .catch((err) => {
        // console.log(err);
        alert(err.response.data.message)
      });
  };

  return (
    <>
      <NAVbar />
      <Container
        fluid
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          maxWidth: "400px",
          marginTop: "40px",
          background: "#fff",
          padding: "25px 50px",
          borderRadius: "10px",
        }}
      >
        <div className="title">Login</div>
        <Form
          style={{ fontSize: "large" }}
          onSubmit={(e) => {
            submit(e);
          }}
        >
          <Row>
            <Col className="col-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    className="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="red"
                    className="bi bi-asterisk"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "6px" }}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                  </svg>
                </Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row
            className="col-12 mb-3"
            style={{ textAlign: "center", fontSize: "small" }}
          >
            <Col>
              Forgot Password?{" "}
              <Link to="/ForgotPass" style={{ textDecoration: "none" }}>
                Click here
              </Link>
            </Col>
          </Row>

          {/* <Row>
            <Col className="col-12">
              <Form.Group className="mb-3">
                <Form.Label>Security Code</Form.Label>
                <Form.Control type="number" placeholder="Enter 6-digit code" />
              </Form.Group>
            </Col>
          </Row> */}

          <Row
            className="col-12 mb-3"
            style={{ textAlign: "center", fontSize: "small" }}
          >
            <Col>
              New User?{" "}
              <Link to="/Register" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
