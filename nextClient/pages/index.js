import { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Meta from "../components/Meta.js";
import api from "../utils/api";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    api.createUser({ username, password }).then(res => console.log(res));
  }

  return (
    <div className="container">
      <Meta />
      <h2 className="text-center mt-2">Create Account</h2>
      <form className="mt-5" onSubmit={register}>
        <div className="row d-flex justify-content-center align-items-center mb-3">
          <label>Username: </label>
          <input
            type="text"
            className="ml-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          <label>Password: </label>
          <input
            type="password"
            className="ml-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <button className="btn btn-lg btn-dark" onClick={register}>Create Account</button>
        </div>
      </form>
    </div>
  );
}
