import Card from "./Card";
import AddTodoModal from "./modals/AddTodoModal";

function HomePage() {
  const todos = [1, 1, 1, 1, 1];
  const isModalVisible = true

  return (
    <>
      <div className="row">
        {todos.map((todo, index) => (
          <Card key={index} />
        ))}
      </div>
      <AddTodoModal visible={isModalVisible} />
    </>
  );
}

export default HomePage;
