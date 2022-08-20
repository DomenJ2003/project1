import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUsers } from "../../helper/api";
import Card from "../General/Card";

function UserPage(props) {
  const [user, setUser] = useState({});

  const getData = async () => {
    const data = await getUsers();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      {users.map((user, index) => {
        const cardData = {
          image: user.avatar,
          header: `${user.first_name} ${user.last_name}`,
          date: new Date(user.date_of_birth),
        };

        return <Card key={index} {...cardData} onClickFunction={{}} />;
      })}
    </>
  );
}

export default UserPage;
