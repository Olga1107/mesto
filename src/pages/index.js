//Импорты
import Api from '../components/Api.js';

import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {PopupConfirmation} from '../components/PopupConfirmation.js';

//Переменные
const enableValidation = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_active'
};

const data = {
  cardTemplate: '#card',
  cardGallery: '.photo-gallery__card',
  cardImage: '.photo-gallery__image',
  title: '.photo-gallery__title',
  buttonLike: '.photo-gallery__like-button',
  activeLike: 'photo-gallery__like-button_active',
  numberLikes: '.number-of-likes',
  buttonRemove: '.photo-gallery__remove-button'
};

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAvatar = document.querySelector('.overlay');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__photo');

const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');
const avatarInput = document.querySelector('.popup__input_data_avatar');

const formAdd = document.forms.addform;
const formEdit = document.forms.editform;
const formAvatar = document.forms.avatarform;
const formConfirm = document.forms.confirmform;

const popupEditForm = document.querySelector('.edit-form');
const popupAddForm = document.querySelector('.add-form');
const popupAvatarForm = document.querySelector('.avatar-form');
const popupView = document.querySelector('.view-photo');
const popupConfirm = document.querySelector('.confirmation');

const pictureCaption = document.querySelector('.popup__caption-photo');
const picture = document.querySelector('.popup__image');
const cardsGallery = document.querySelector('.photo-gallery');

//Класс Api
const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: "fa8b7030-628c-4c20-88d8-1bf7f45e43a9",
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([users, cards]) => {
    userInfo.setUserInfo(users);
    firstListCard.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
});

//Валидация форм
const validationProfile = new FormValidator (enableValidation, formEdit);
const validationCard = new FormValidator (enableValidation, formAdd);
const validationAvatar = new FormValidator(enableValidation, formAvatar);

validationCard.enableValidation();
validationProfile.enableValidation();
validationAvatar.enableValidation();

//Создание карточек
function creatCard(cardTemplate) {
  const card = new Card (cardTemplate, data, openViewPicture, deleteCard, likeCard, userInfo).addCard();
  return card;
};

function renderCard(item) {
  const cardElement = creatCard(item);
  firstListCard.addItem(cardElement);
};

const firstListCard = new Section({renderer: renderCard}, cardsGallery);

//Открытие увеличенной картинки
const popupZoom = new PopupWithImage (popupView, picture, pictureCaption);
popupZoom.setEventListeners();

function openViewPicture ({name, link}) {
    popupZoom.openPopup({name, link});
};

//Форма добавления карточек
const popupAddCard = new PopupWithForm (popupAddForm, {submitForm: (data)=> {
 popupAddCard.isLoading(true, 'Создание...')
  api.addCards(data)
  .then((res) => {
    firstListCard.addItem(creatCard(res));
   popupAddCard.closePopup();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => popupAddCard.isLoading(false))
}});
 popupAddCard.setEventListeners();

buttonAdd.addEventListener('click', () => {
  validationCard.disabledButton();
 popupAddCard.openPopup()});

//Форма редактирования профиля
const popupEditInformation = new PopupWithForm (popupEditForm, {submitForm: (data) => {
  popupEditInformation.isLoading(true, 'Сохранение...')
  api.setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditInformation.closePopup();})
    .catch((err) => {
      console.log(err)
    })
    .finally(() => popupEditInformation.isLoading(false))
}});

function openEditProfile() {
  const {name, profession} = userInfo.getUserInfo(); 
  nameInput.value = name;
  jobInput.value = profession;
  popupEditInformation.openPopup();
};

popupEditInformation.setEventListeners();
buttonEdit.addEventListener('click', openEditProfile);

//Форма редактирования аватара
function openProfileAvatar() {
  const {avatar} = userInfo.getUserInfo(); 
  avatarInput.value = avatar;
  validationAvatar.disabledButton();
  popupAvatarProfile.openPopup();
}

const popupAvatarProfile = new PopupWithForm (popupAvatarForm, {submitForm: (data) => {
  popupAvatarProfile.isLoading(true, 'Сохранение...')
  api.setUserAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatarProfile.closePopup();})
    .catch((err) => {
      console.log(err)
    })
    .finally(() => popupAvatarProfile.isLoading(false))
}});

popupAvatarProfile.setEventListeners();
buttonAvatar.addEventListener('click', openProfileAvatar)

//Данные пользователя
const userInfo = new UserInfo ({name: profileName, profession: profileProfession, avatar: profileAvatar});

//Функция лайка карточек
function likeCard (buttonLike, activeLike, idCard, numberLikes) {
  if (buttonLike.classList.contains(activeLike)) {
    api.deleteLike(idCard)
    .then((like) => {
      idCard.removeLikeClass();
      numberLikes.textContent = like.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  api.putLike(idCard)
  .then((like) => {
    idCard.addLikeClass();
    numberLikes.textContent = like.likes.length;
  })
  .catch((err) => {
    console.log(err);
  });
  }
};

//Функция удаления карточек
function deleteCard (card, idCard) {
  openConfirmation.openPopup(card, idCard);
}

//Окно подтверждения удаления карточки
const openConfirmation = new PopupConfirmation(popupConfirm, {submitForm: (card, idCard) => {
  api.deleteCard(idCard)
  .then(() => {
    card.removeCard();
    card = null;
  })
  .then(() => {
    openConfirmation.closePopup();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => openConfirmation.isLoading(false))
}})

openConfirmation.setEventListeners();