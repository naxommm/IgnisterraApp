import { View, Text, TouchableOpacity } from "react-native";
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = ({ navigation }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <StyledWrapper>
            <Form className="form_main">
              <p className="heading">Login</p>
              <Form.Group className="inputContainer" controlId="formUsername">
                <Form.Control type="text" placeholder="Username" className="inputField" />
              </Form.Group>
              <Form.Group className="inputContainer" controlId="formPassword">
                <Form.Control type="password" placeholder="Password" className="inputField" />
              </Form.Group>
              <Button onClick={() => navigation.navigate("Debug" ,{ name: "ola123" }) } id="button" >Submit</Button>
              <div className="signupContainer">
                <p>Don't have any account?</p>
                <a href="#">dsadaddsd up</a>
              </div>
            </Form>
          </StyledWrapper>
        </Col>
      </Row>
      <TouchableOpacity onPress={() => navigation.navigate("Debug" ,{ name: "ola123" }) } >
        <Text>Ir a Debug</Text>
      </TouchableOpacity>
    </Container>
  );
}


const StyledWrapper = styled.div`
  .form_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  }

  .heading {
    font-size: 2.5em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 15px 0 30px 0;
  }

  .inputContainer {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inputField {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    border-radius: 30px;
    margin: 10px 0;
    color: black;
    font-size: .8em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 30px;
  }

  .inputField:focus {
    outline: none;
    border-bottom: 2px solid rgb(199, 114, 255);
  }

  .inputField::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }

  #button {
    position: relative;
    width: 100%;
    border: 2px solid #8000ff;
    background-color: #8000ff;
    height: 40px;
    color: white;
    font-size: .8em;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 30px;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
  }

  #button::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: .5s;
  }

  #button:hover::after {
    transform: translateX(600px);
    transition-duration: .5s;
  }

  .signupContainer {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .signupContainer p {
    font-size: .9em;
    font-weight: 500;
    color: black;
  }

  .signupContainer a {
    font-size: .7em;
    font-weight: 500;
    background-color: #2e2e2e;
    color: white;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
  }
`;

export default LoginForm;