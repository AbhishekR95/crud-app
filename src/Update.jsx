import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState(0);

  const history = useNavigate();

  //   Get Localstore
  useEffect(() => {
    setID(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  //   Update
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://66601a7b5425580055b231ee.mockapi.io/CRUD-REACT/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Update
        </Button>
      </Form>
      <br />
      <Link to={"/read"}>
        <Button variant="dark">Back</Button>
      </Link>
    </>
  );
};

export default Update;
