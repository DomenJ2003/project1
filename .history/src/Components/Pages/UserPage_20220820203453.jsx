import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";

function UserPage(props) {
  const [user, setUser] = useState({});
     const cardData

  const getData = async () => {
    const data = await getUser();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
    = {
      image: user.avatar,
      header: `${user.first_name} ${user.last_name}`,
      date: new Date(user.date_of_birth),
    };
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      <Card key={index} {...cardData} onClickFunction={showUserData} />;
    </>
  );
}

export default UserPage;
