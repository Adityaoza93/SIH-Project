import React, { useState } from "react";
import "./ForgotPass_Style.css";
import Container from "react-bootstrap/Container";
import NAVbar from "./NAVbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

export default function ForgotPass() {
  // const [password,setPassword]=useState("")
  // const [passwordAgain,setPasswordAgain]=useState("")

  function matchPassword() {
    var pw1 = document.getElementById("psw1");
    var pw2 = document.getElementById("psw2");
    if (pw1 != pw2) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
  }
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
          maxWidth: "600px",
          marginTop: "10px",
          background: "#fff",
          padding: "25px 50px",
          borderRadius: "10px",
        }}
      >
        <div className="title">Forgot Password</div>
        <Form style={{ fontSize: "large" }}>
          <Row>
            <Col className="col-12">
              <Form.Group className="mb-1" id="formBasicEmail">
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
                  className="mb-2"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Button className="mb-3" variant="success" type="submit">
                Generate OTP?
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <Form.Group className="mb-1" id="formBasicPassword">
                <Form.Label>
                  OTP{" "}
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
                  className="mb-2"
                  type="password"
                  required
                  placeholder="Enter the 6-digit OTP"
                />
              </Form.Group>
              <Button className="mb-3" variant="success" type="submit">
                Verify
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="col-6">
              <Form.Group className="mb-3" id="formBasicPassword">
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
                  id="psw1"
                  name="psw"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" id="formBasicPassword">
                <Form.Label>
                  Confirm Password{" "}
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
                  id="psw1"
                  name="psw"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row
            className="col-12 mb-2"
            style={{ textAlign: "center", fontSize: "medium" }}
          >
            <Col>
              Go back to{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
              ?
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit" onClick={matchPassword}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
