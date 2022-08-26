import { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE, BASE } from "../utils";
import { useNavigate } from "react-router-dom";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "../actions/types";

import "./authform.css";
function login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispach = useDispatch();
  const navigate = useNavigate();

  const loginAction = () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispach({ type: USER_LOGIN_START });
    axios
      .post(API_BASE + "login", user)
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          dispach({ type: USER_LOGIN_SUCCESS, payload: response.data });
          navigate(BASE);
        } else {
          alert(response.data.msg);
          dispach({ type: USER_LOGIN_FAILURE });
        }
      })
      .catch(function (error) {
        dispach({ type: USER_LOGIN_FAILURE });
      });
  };

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
              ref={emailRef}
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
        <button type="button" className="btn btn-primary" onClick={loginAction}>
          Button
        </button>
      </div>
    </div>
  );
}
export default login;
