import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";
import Card from "../General/Card";
import { useLocation } from "react-router-dom";

function UserPage(props) {
  //const [user, setUser] = useState({});
  const { state } = useLocation();
  const { cardData, setCardData } = useState("s");
  const s = "neki";

  const f = () => {
    console.log(cardData);
  };

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
