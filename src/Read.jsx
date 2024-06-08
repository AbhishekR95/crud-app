import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  const getData = () => {
    axios
      .get("https://66601a7b5425580055b231ee.mockapi.io/CRUD-REACT")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://66601a7b5425580055b231ee.mockapi.io/CRUD-REACT/${id}`)
      .then(() => {
        getData();
      });
  };

  const setLocalStore = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <Table striped bordered hover size="sm" className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
            <th></th>
            <th>
              {" "}
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={() => {
                    if (tabledark === "table-dark") {
                      setTableDark("");
                    } else {
                      setTableDark("table-dark");
                    }
                  }}
                />
              </Form>
            </th>
          </tr>
        </thead>

        {data.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={"/update"}>
                    <Button
                      variant="warning"
                      onClick={() =>
                        setLocalStore(user.id, user.name, user.email)
                      }
                    >
                      Edit
                    </Button>
                  </Link>
                </td>
                <td>
                  {" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>

      <Link to={"/"}>
        <Button variant="dark">Create User</Button>
      </Link>
    </>
  );
};

export default Read;
