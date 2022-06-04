import React from 'react';

function Card({card, onCardClick}) {

    function handleCardClick() {
      onCardClick(card);
    }
  
    return (

     <div className="card">
      <img 
        src={card.link} 
        alt={card.name} 
        className="card__image"
        onClick={handleCardClick} />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-contain">
          <button className="card__like" 
            type="button"></button>
          <span className="card__likes-number">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__button-trash" 
        type="button" 
        aria-label="Удаление карточки"></button>
    </div>
    );
  }
  
export default Card;