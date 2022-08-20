import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";
import Card from "../General/Card";
import { useLocation } from "react-router-dom";

function UserPage(props) {
  const [user, setUser] = useState({});
  const { state } = useLocation();
  let cardData = {};

  //const getData = async () => {
  //  //const data = await getUser();
  //  setUser(state);
  //  console.log(state);
  //};
  //
  useEffect(() => {
    console.log(state.user);
    //getData();
    cardData = {
      image: user.avatar,
      header: `${user.first_name} ${user.last_name}`,
      date: new Date(user.date_of_birth),
    };
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      <Card
        key={1}
        image={cardData.image}
        header={cardData.header}
        date={cardData.date}
        onClickFunction={() => {}}
      />
    </>
  );
}

export default UserPage;
