import { useState, useEffect } from "react";
import "./UserPage.css";
import { getUser } from "../../helper/api";
import Card from "../General/Card";
import { useLocation } from "react-router-dom";

function UserPage(props) {
  //const [user, setUser] = useState({});
  const { state } = useLocation();
  const [cardData, setCardData] = useState({});

  const getData = async () => {
    const data = await getUser();
    setCardData({
      image: data.avatar,
      header: `${data.first_name} ${data.last_name}`,
      date: new Date(data.date_of_birth),
    });
    console.log(cardData.header);
  };

  useEffect(() => {
    try {
      setCardData({
        image: state.user.avatar,
        header: `${state.user.first_name} ${state.user.last_name}`,
        date: new Date(state.user.date_of_birth),
      });
    } catch (e) {
      getData();
    }
  }, []);

  return (
    <>
      <h1>Podatki Uporabnika</h1>
      <h2>{cardData.datetoLocaleDateString()}</h2>
      {/* <Card
        key={1}
        image={cardData.image}
        header={cardData.header}
        date={cardData.date}
        onClickFunction={() => {}}
      /> */}
    </>
  );
}

export default UserPage;
