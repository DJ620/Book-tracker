import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/api";
import { Form } from "react-bootstrap";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    api.login({ username, password }).then((res) => {
      console.log(res);
      if (res.data.success) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/collection");
      }
    });
  };

  const styles = {
    form: {
      width: "200px",
      margin: "0 auto"
    }
  };

  return (
    <div className="container pt-3">
      <h2 className="text-center mt-2">Sign In</h2>
      <Form style={styles.form} className="mt-3" onSubmit={signIn}>
        <Form.Group className="row d-flex justify-content-center align-items-center mb-3">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            className="text-center shadow"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="row d-flex justify-content-center align-items-center ">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            className="text-center shadow"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="row d-flex justify-content-center mt-4">
          <button className="btn btn-lg btn-dark" onClick={signIn}>
            Login
          </button>
        </div>
      </Form>
      <p className="text-center mt-2">
        Don't have an account? Register <a href="/register">here</a>
      </p>
    </div>
  );
};

export default Login;