import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";
import Card from "../General/Card";

function UserPage(props) {
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
    <>
      <h1>Podatki Uporabnika</h1>
      <Card key={1} {...cardData} onClickFunction={{}} />;
    </>
  );
}

export default UserPage;
