import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";

function UserPage(props) {
  const [user, setUser] = useState({});

  const getData = async () => {
    const data = await getUser();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      <Card key={index} {...cardData} onClickFunction={showUserData} />;
    </>
  );
}

export default UserPage;
