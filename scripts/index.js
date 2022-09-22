import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';

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

const buttonEdit = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');

const buttonAdd = document.querySelector('.profile__add-button');
const namePlaceInput = document.querySelector('.popup__input_data_place-name');
const urlPictureInput = document.querySelector('.popup__input_data_url-on-picture');

const formAdd = document.forms.addform;
const formEdit = document.forms.editform;

const popupEditForm = document.querySelector('.edit-form');
const popupAddForm = document.querySelector('.add-form');
const popupView = document.querySelector('.view-photo');
const pictureCaption = document.querySelector('.popup__caption-photo');
const picture = document.querySelector('.popup__image');

const cardsGallery = document.querySelector('.photo-gallery');

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
}

const validationProfile = new FormValidator (enableValidation, formEdit);
const validationCard = new FormValidator (enableValidation, formAdd);

validationCard.enableValidation();
validationProfile.enableValidation();


function creatCard(cardTemplate) {
  const card = new Card (cardTemplate, data, openViewPicture).addCard();
  return card;
}

const popupZoom = new PopupWithImage (popupView, picture, pictureCaption);
popupZoom.setEventListeners();

function openViewPicture ({name, link}) {
    popupZoom.openPopup({name, link});
}

const openAdd = new PopupWithForm (popupAddForm, createNewCard);
openAdd.setEventListeners();

buttonAdd.addEventListener('click', () => {
  validationCard.disabledButton();
  openAdd.openPopup()});

const openEdit = new PopupWithForm (popupEditForm, formSubmitHandlerEdit);
openEdit.setEventListeners();

const userInfo = new UserInfo ({name: profileName, job: profileProfession});

function openEditProfile() {
  const {name, job} = userInfo.getUserInfo(); 
  nameInput.value = name;
  jobInput.value = job;
  openEdit.openPopup();
};

buttonEdit.addEventListener('click', openEditProfile);

function formSubmitHandlerEdit() {
  const res = {
    name: nameInput.value, 
    job: jobInput.value};
  userInfo.setUserInfo(res);
  openEdit.closePopup();
};

function createNewCard() {
  const name = namePlaceInput.value;
  const link = urlPictureInput.value;
  renderCard(({name,link}), true);
  openAdd.closePopup();
};

function renderCard(cardTemplate) {
  const cardElement = creatCard(cardTemplate);
  firstListCard.addItem(cardElement);
};

const firstListCard = new Section({items: initialCards, renderer: renderCard}, cardsGallery);
firstListCard.renderItems();