import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";
import Card from "../General/Card";
import { useLocation } from "react-router-dom";

function UserPage(props) {
  //const [user, setUser] = useState({});
  const { state } = useLocation();
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    try {
      setCardData({
        image: cardData.image,
        header: `${state.user.first_name} ${state.user.last_name}`,
        date: new Date(state.user.date_of_birth),
      });
    } catch (e) {}
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      {/*       
         <Card
           key={1}
           image={cardData.image}
           header={`${state.user.first_name} ${state.user.last_name}`}
           date={new Date(state.user.date_of_birth)}
           onClickFunction={() => {}}
         />
       */}
    </>
  );
}

export default UserPage;
