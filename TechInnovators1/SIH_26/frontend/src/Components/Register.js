import "./register_style.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import NAVbar from "./NAVbar";
import PasswordChecklist from "react-password-checklist";


import axios from "axios";

export default function Register() {
  let Navigate = useNavigate();
  // const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [user, setUser] = useState({
    email: "",
    collegeName: "",
    principalName: "",
    mobile: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  function matchPassword() {
    if(user.password==passwordAgain) {
      return true;
    }
    return false;
    // var pw1 = document.getElementById("psw1");
    // var pw2 = document.getElementById("psw2");
    // if (pw1 != pw2) {
    //   alert("Passwords did not match");}
    // } else {
    //   user.password=pws;
    //   alert("Password created successfully");
    // }
  }

  const submit = async (e) => {
    e.preventDefault();
    if(!matchPassword()){
      return alert("Password does not match")
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": '*',
        // "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
      },
    };
    const body = {
      ...user,
    };
    
    try {
      const result = await axios
        .post(`http://localhost:4000/api/register`, body, config)
        .then((res) => {
          console.log(res);
          Navigate("/");
          alert(res.data.message);
          
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
          setUser({
            ...user, //spread operator
            ["email"]: "",
          });
        });
    } catch (error) {
      console.log("error=>", error.message);
      alert(error.response.data.message);
    }
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
          maxWidth: "600px",
          marginTop: "40px",
          background: "#fff",
          padding: "15px 50px",
          borderRadius: "10px",
          fontSize: "16px",
          // principal, college dropbox, email, password, mobile no.
        }}
      >
        <div className="title">Registration</div>
        <Form 
        onSubmit={(e) => {
          submit(e);
        }}
        >
          <Row>
            <Col className="col-6">
              <Form.Group className="mb-3" id="formBasicPname">
                <Form.Label>
                  Principal's Name:{" "}
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
                  type="text"
                  required
                  placeholder="Enter your name"
                  name="principalName"
                  value={user.principalName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" id="formBasicCname">
                <Form.Label>
                  College Name{" "}
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
                  type="text"
                  list="orgname"
                  required
                  placeholder="Enter college name"
                  name="collegeName"
                  value={user.collegeName}
                  onChange={handleChange}
                />
                <datalist id="orgname">
                  <option value="Acharaya N.G.Ranga Agricultural University" />
                  <option value="Acharya Nagarjuna University" />
                  <option value="Adikavi Nannaya University" />
                  <option value="Kanyashree University" />
                  <option value="Hindi University" />
                  <option value="Alipurduar University" />
                  <option value="Harichand Guruchand University" />
                  <option value="National Academy of Legal Studies & Research University" />
                  <option value="Jawaharlal Nehru Technological University" />
                  <option value="Marathwada Agricultural University" />
                  <option value="Mumbai University" />
                  <option value="Mahatma Phule Krishi Vidyapeeth" />
                  <option value="Rani Channamma University" />
                  <option value="Vijayanagara Sri Krishnadevaraya University" />
                  <option value="Karnataka Samskrit University" />
                  <option value="KSGH Music and Performing Arts University" />
                  <option value="Rajiv Gandhi University of Health Science" />
                  <option value="Gujarat University of Transplantation Sciences" />
                  <option value="Institute of Infrastructure Technology Research and Management" />
                  <option value="Navsari Agriculture University" />
                  <option value="Bhakta Kavi Narsinh Mehta University" />
                  <option value="Shri Govind Guru University" />
                  <option value="Sardar Krushinagar Dantiwada Agricultural University" />
                </datalist>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" id="formBasicEmail">
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
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button> */}
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>
                  Phone Number{" "}
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
                  type="tel"
                  required
                  placeholder="Enter your phone no."
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Button className="mb-2" variant="success" type="submit">
                Verify
              </Button> */}
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
                {/* <Form.Control
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordChecklist
                  rules={[
                    "minLength",
                    "specialChar",
                    "number",
                    "capital",
                    "match",
                  ]}
                  minLength={5}
                  value={password}
                  valueAgain={passwordAgain}
                  style={{ fontSize: "12px" }}
                /> */}
                <Form.Control
                  type="password"
                  id="psw1"
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Enter your password"
                  required
                  value={user.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col className="col-6">
              <Form.Group className="mb-3" id="formBasicCPassword">
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
                {/* <Form.Control
                  type="password"
                  required
                  placeholder="ReEnter your password"
                  onChange={(e) => setPasswordAgain(e.target.value)}
                /> */}
                <Form.Control
                  type="password"
                  id="psw2"
                  name="psw"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="ReEnter your password"
                  required
                  value={passwordAgain}
                  onChange={(e)=>{setPasswordAgain(e.target.value)}}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-2" style={{ textAlign: "center" }}>
            <Col>
              Already have an account?{" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Col>
          </Row>

          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
