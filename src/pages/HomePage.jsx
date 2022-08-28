import { useEffect } from "react";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE } from "../utils";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from "../actions/types";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    dispatch({ type: GET_POSTS_START });
    axios
      .get(API_BASE + "posts")
      .then(function (response) {
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
      })
      .catch((err) => {
        toast.error("napaka", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        dispatch({ type: GET_POSTS_FAILURE });
      });
  }, []);

  return (
    <>
      <div className="row">
        {posts.map((post, index) => (
          <Card
            key={index}
            {...posts[posts.length - (index + 1)]}
            profile={true}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
