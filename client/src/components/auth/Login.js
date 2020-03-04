import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log("Login submit");
  };

  return (
    <div className="mt-3" style={{ maxWidth: "500px", margin: "auto" }}>
      <h1 className="text-center">
        <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            name="email"
            type="email"
            className="form-control"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            name="password"
            type="password"
            className="form-control"
            onChange={onChange}
          />
        </div>

        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
