import { useState, useEffect } from "react";
import Card from "../components/Card";

import { useSelector } from "react-redux";
import axios from "axios";
import { apiBase } from "../utils";

function HomePage() {
  const todos = useSelector((state) => state.todo.todoData);
  useEffect(() => {
    axios.get(apiBase + "users").then(function (response) {
      console.log(response);
    });
  }, []);

  return (
    <>
      <div className="row">
        {todos.map((todo) => (
          <Card key={todo.ident} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
