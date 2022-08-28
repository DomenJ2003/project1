import axios from "axios";
import { API_BASE } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS_START, GET_POSTS_SUCCESS } from "../actions/types";

function Card({ id, title, content, date, name, image, profile }) {
  const dateObj = new Date(date);
  const jwt = useSelector((state) => state.user.jwt);
  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  const dispatch = useDispatch();

  const deletPost = () => {
    console.log(id);
    dispatch({ type: GET_POSTS_START });
    axios
      .post(API_BASE + "posts/delete", { id: id }, config)
      .then((response) => {
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
      });
  };

  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="card">
        <img
          src={
            image
              ? image
              : "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          }
          className="card-img-top"
          alt="Fissure in Sandstone"
          style={{ width: "100%", objectFit: "cover", height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {name} - {dateObj.toLocaleDateString()}
          </h6>
          <p className="card-text">{content}</p>
          {profile ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="button" className="btn btn-primary">
                <i className="fas fa-edit" style={{ paddingRight: 5 }}></i>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletPost(id)}
              >
                <i className="fas fa-trash-alt" style={{ paddingRight: 5 }}></i>
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
