import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { COUNT_POSTS_START, COUNT_POSTS_SUCCESS } from "../actions/types";

function Dashboard() {
  const jwt = useSelector((state) => state.user.jwt);
  const posts = useSelector((state) => state.post.posts_count);
  const dispatch = useDispatch();
  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  useEffect(() => {
    dispatch({ type: COUNT_POSTS_START });
    axios
      .get(API_BASE + "count", config)
      .then((response) => {
        dispatch({ type: COUNT_POSTS_SUCCESS, payload: response.data });
        console.log(posts);
      })
      .catch((e) => console.log(e));
  }, []);

  const getChartOptions = ({ title }) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  function TopMembersChart() {
    const options = getChartOptions({ title: "Most active members" });
    const data = {
      labels: posts.map((post) => post.name),
      datasets: [
        {
          label: "Members by name",
          data: posts.map((x) => x.post_count),
          backgroundColor: "#1266f1",
        },
      ],
    };

    return posts.length !== 0 ? <Bar options={options} data={data} /> : <></>;
  }

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>{TopMembersChart()}</div>
  );
}

export default Dashboard;
