import {
  SHOW_TODO_MODAL,
  TODO_CHANGE_SEARCH,
  USER_LOGOUT,
} from "./../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BASE } from "../utils";

function Navbar() {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.todo.search);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const updateSearch = (event) => {
    event.preventDefault();
    dispatch({
      type: TODO_CHANGE_SEARCH,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    searchRef.current.value = searchInput;
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => navigate(BASE)}
          style={{
            cursor: "pointer",
          }}
        >
          Blog App
        </a>
        <form className="d-flex input-group w-auto">
          <input
            ref={searchRef}
            onChange={(e) => {
              updateSearch(e);
            }}
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
          <button
            type="button"
            className="btn btn-primary" // me-5"
            style={{
              height: "35.27px",
              borderRadius: 5,
              marginRight: "10px",
            }}
            onClick={() => dispatch({ type: SHOW_TODO_MODAL })}
          >
            Add To Do
          </button>
          <button
            type="button"
            className="btn btn-danger me-3"
            style={{
              height: "35.27px",
              borderRadius: 5,
            }}
            onClick={() => {
              dispatch({ type: USER_LOGOUT });
              navigate(BASE);
            }}
          >
            Log Out
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
