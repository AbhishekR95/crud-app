import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("https://66601a7b5425580055b231ee.mockapi.io/CRUD-REACT", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
     
      <h1>Create User</h1>
      <Form onSubmit={(e) => handleCreate(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      <br />
      <Link to={"/read"}>
        <Button className="margin-top" variant="dark">
          Show users
        </Button>
      </Link>
    </>
  );
};

export default Create;
