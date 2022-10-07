import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupConfirmation} from '../components/PopupConfirmation.js';
import {Api} from '../components/Api.js';

const initialCards = [
  {
    name: 'Байкал',
    link: 'https://all-aforizmy.ru/wp-content/uploads/2022/02/scale_1200-8.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

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
const avatarInput = document.querySelector('.popup__input_data_url-on-avatar');

const formAdd = document.forms.addform;
const formEdit = document.forms.editform;
const formAvatar = document.forms.avatarform;

const popupEditForm = document.querySelector('.edit-form');
const popupAddForm = document.querySelector('.add-form');
const popupAvatarForm = document.querySelector('.avatar-form');
const popupView = document.querySelector('.view-photo');

const pictureCaption = document.querySelector('.popup__caption-photo');
const picture = document.querySelector('.popup__image');
const cardsGallery = document.querySelector('.photo-gallery');


const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: "fa8b7030-628c-4c20-88d8-1bf7f45e43a9",
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([users, cards]) => {
    openEdit.setUserInfo(users);
    firstListCard.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
});


const validationProfile = new FormValidator (enableValidation, formEdit);
const validationCard = new FormValidator (enableValidation, formAdd);
const validationAvatar = new FormValidator(enableValidation, formAvatar);

validationCard.enableValidation();
validationProfile.enableValidation();
validationAvatar.enableValidation();


function creatCard(cardTemplate) {
  const card = new Card (cardTemplate, data, openViewPicture).addCard();
  return card;
}

const popupZoom = new PopupWithImage (popupView, picture, pictureCaption);
popupZoom.setEventListeners();

function openViewPicture ({name, link}) {
    popupZoom.openPopup({name, link});
}

const openAdd = new PopupWithForm (popupAddForm, {submitForm: (data)=> {
  renderCard(data);
  openAdd.closePopup();
}});

openAdd.setEventListeners();

buttonAdd.addEventListener('click', () => {
  validationCard.disabledButton();
  openAdd.openPopup()});

const openEdit = new PopupWithForm (popupEditForm, {submitForm: (data) => {
  userInfo.setUserInfo(data);
  openEdit.closePopup();
}});

openEdit.setEventListeners();

function openProfileAvatar() {
  const {avatar} = userInfo.getUserInfo(); 
  avatarInput.value = avatar;
  validationAvatar.disabledButton();
  openAvatar.openPopup();
}

const openAvatar = new PopupWithForm (popupAvatarForm, {submitForm: (data) => {
  userInfo.setUserInfo(data);
  openEdit.closePopup();
}});

openAvatar.setEventListeners();
buttonAvatar.addEventListener('click', openProfileAvatar)

const userInfo = new UserInfo ({name: profileName, profession: profileProfession, avatar: profileAvatar});

function openEditProfile() {
  const {name, profession} = userInfo.getUserInfo(); 
  nameInput.value = name;
  jobInput.value = profession;
  openEdit.openPopup();
};


buttonEdit.addEventListener('click', openEditProfile);

function renderCard(cardTemplate) {
  const cardElement = creatCard(cardTemplate);
  firstListCard.addItem(cardElement);
};

const firstListCard = new Section({renderer: renderCard}, cardsGallery);
//firstListCard.renderItems({items: initialCards});