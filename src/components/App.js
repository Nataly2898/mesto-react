import React from 'react';
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  // Обработчик редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Обработчик кнопки редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Обработчик добавления карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
 
  // Обработчик открытия карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //Обработчик закрытия popup
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <div className="page">
        
    <Header />

    <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />

    <Footer />
    
    {/* Попап обновление Аватара */}
    <PopupWithForm
      name="edit_avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
        <label className="form__field">
         <input 
            id="avatar" 
            name="avatar" 
            className="popup__input popup__input_type_link" 
            type="url" 
            placeholder="Ссылка на картинку" 
            required />
          <span className="popup__form-error avatar-error"></span>
        </label>
    </PopupWithForm>

    {/* Попап редактирования Профиля */}
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}>
        <label className="form__field">
          <input 
            id="inputTitle" 
            name="inputTitle" 
            className="popup__input popup__input_type_name" 
            type="text"
            placeholder="Имя пользователя" 
            minLength="2" 
            maxLength="40" 
            required />
          <span className="popup__form-error inputTitle-error"></span>
        </label>
        <label className="form__field">
          <input 
            id="inputSubtitle" 
            name="inputSubtitle" 
            className="popup__input popup__input_type_description"
            type="text"
            placeholder="О себе" 
            minLength="2" 
            maxLength="200" 
            required />
          <span className="popup__form-error inputSubtitle-error"></span>
        </label>
    </PopupWithForm>

    {/* Попап добавление Карточки */}
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <label className="form__field">
          <input 
            id="inputTitleAdd" 
            name="inputTitleAdd" 
            className="popup__input popup__input_type_title" 
            type="text"
            placeholder="Название"
            minLength="2" 
            maxLength="30" 
            required />
          <span className="popup__form-error inputTitleAdd-error"></span>
        </label>
        <label className="form__field">
          <input 
            id="inputSubtitleAdd" 
            name="inputSubtitleAdd" 
            className="popup__input popup__input_type_link" 
            type="url"
            placeholder="Ссылка на картинку" 
            required />
          <span className="popup__form-error inputSubtitleAdd-error"></span>
        </label>
    </PopupWithForm>

    {/* Попап подтверждение удаления карточки */}
    <PopupWithForm
      name="addcard-delete"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={false}
      onClose={closeAllPopups}
    /> 
    
    {/* Попап открытия карточки */}
    <ImagePopup
      card = {selectedCard}
      onClose = {closeAllPopups}
    />

   </div>
 </div>
 );
}

export default App;
