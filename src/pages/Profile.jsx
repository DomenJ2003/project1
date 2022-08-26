import { useEffect } from "react";
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_START,
} from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_BASE } from "../utils";
import Card from "../components/Card";

function Profile() {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.user.jwt);
  const profileData = useSelector((state) => state.post.profileData);
  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  useEffect(() => {
    dispatch({ type: GET_PROFILE_START });
    axios
      .get(API_BASE + "profile", config)
      .then(function (response) {
        console.log(response);
        dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        alert("napaka");
        dispatch({ type: GET_PROFILE_FAILURE });
      });
  }, []);

  return (
    <>
      {profileData?.posts?.map((post) => {
        return <Card key={post.id} {...post} />;
      })}
    </>
  );
}

export default Profile;
