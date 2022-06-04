import React from "react";
import logoAva from "../images/kusto.jpg";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState(logoAva);
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.error(err));

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.error(err));
  }, []);
  
  return (
    <main className="content">

      <section className="profile">
        <img 
          src={userAvatar} 
          alt="Аватар пользователя" 
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }} />
        <button className="profile__avatar-button" 
          onClick={props.onEditAvatar}></button>

        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" 
            type="button" 
            aria-label="Открыть" 
            onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" 
        type="button" 
        aria-label="Загрузить фото" 
        onClick={props.onAddPlace}></button>
      </section>
  
      <section className="cards cards__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick = {props.onCardClick}
            />
          ))}
      </section>

      </main>
  );
}
  
export default Main;