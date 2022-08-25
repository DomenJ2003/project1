import { useRef } from "react";

import "./authform.css";
function login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="card my-form-card">
      <div className="card-body">
        <h3 className="card-title">Login</h3>
        <div className="card-text">
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              ref={usernameRef}
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="form-control"
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Button
        </button>
      </div>
    </div>
  );
}
export default login;
