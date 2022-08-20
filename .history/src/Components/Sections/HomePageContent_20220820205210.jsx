import { useState, useEffect } from "react";
import Card from "../General/Card";
import "./HomePageContent.css";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../helper/api";

function HomePageContent() {
  const showUserData = (id) => {
    navigate("/user", { state: { id: id, color: "green" } });
  };

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const getData = async () => {
    const data = await getUsers();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="homepage-content">
      <h1>Recent Activity</h1>
      <div className="cards-container">
        {users.map((user, index) => {
          const cardData = {
            image: user.avatar,
            header: `${user.first_name} ${user.last_name}`,
            date: new Date(user.date_of_birth),
            id: user.id,
          };

          return (
            <Card
              key={index}
              {...cardData}
              onClickFunction={() => showUserData(user.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePageContent;
