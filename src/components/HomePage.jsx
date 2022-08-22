import { useState } from "react";
import Card from "./Card";
import AddTodoModal from "./modals/AddTodoModal";

function HomePage({isModalVisible, setModalVisible}) {
  const todos = [1, 1, 1, 1, 1];
  

  return (
    <>
      <div className="row">
        {todos.map((todo, index) => (
          <Card key={index} />
        ))}
      </div>
      <AddTodoModal visible={isModalVisible} setVisible={setModalVisible}/>
    </>
  );
}

export default HomePage;
