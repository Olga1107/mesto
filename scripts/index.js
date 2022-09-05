import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://all-aforizmy.ru/wp-content/uploads/2022/02/scale_1200-8.jpg'
  }
];

const popups = document.querySelectorAll('.popup');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseEditForm = document.querySelector('.popup__close-button-edit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');

const buttonAdd = document.querySelector('.profile__add-button');
const namePlaceInput = document.querySelector('.popup__input_data_place-name');
const urlPictureInput = document.querySelector('.popup__input_data_url-on-picture');
const buttonCloseAddForm = document.querySelector('.popup__close-button-add');

const buttonCloseView = document.querySelector('.popup__close-button-view');

const formAdd = document.forms.addform;
const formEdit = document.forms.editform;

const popupEditForm = document.querySelector('.edit-form');
const popupAddForm = document.querySelector('.add-form');
const popupView = document.querySelector('.view-photo');

const cardsGallery = document.querySelector('.photo-gallery');

const enableValidation = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_active'
};

const validationProfile = new FormValidator (enableValidation, formEdit);
const validationCard = new FormValidator (enableValidation, formAdd);

validationCard.enableValidation();
validationProfile.enableValidation();

export function openViewPicture ({name, link}) {
  const pictureCaption = document.querySelector('.popup__caption-photo');
  const picture = document.querySelector('.popup__image');
    pictureCaption.textContent = name;
    picture.src = link;
    picture.alt = name;
    openPopup(popupView);
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', exitPopup);
}
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitPopup);
}

function exitPopup(evt) {
  if (evt.key === 'Escape') {
    const exitPopup = document.querySelector('.popup_opened');
    closePopup(exitPopup);
};
};

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupEditForm);
};

function closePopupEdit() {
    closePopup(popupEditForm);
};

function formSubmitHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup (popupEditForm);
};

function openPopupAdd() {
    formAdd.reset();
    openPopup(popupAddForm);
};

function closePopupAdd() {
    closePopup(popupAddForm);
};

function closePopupView() {
    closePopup(popupView);
};

function renderCard(cardElement, isPrepend = false) {
  if(isPrepend) {
    cardsGallery.prepend(cardElement);
  }
  else {
    cardsGallery.append(cardElement);
  }
};

function createNewCard(evt) {
  evt.preventDefault();
  const name = namePlaceInput.value;
  const link = urlPictureInput.value;
  renderCard(new Card({name, link}), true);
  closePopup (popupAddForm);
  formAdd.reset();
  const buttonSave = document.querySelector('.button-saved');
  buttonSave.classList.add('popup__save-button_disabled');
  buttonSave.setAttribute('disabled', true);
  };

function addFirstListCard() {
  initialCards.forEach(function (cardElement) 
  {renderCard(new Card(cardElement))});
}

addFirstListCard();

  buttonEdit.addEventListener('click', openPopupEdit);
  buttonCloseEditForm.addEventListener('click', closePopupEdit);
  popupEditForm.addEventListener('submit', formSubmitHandlerEdit);

  buttonAdd.addEventListener('click', openPopupAdd);
  buttonCloseAddForm.addEventListener('click', closePopupAdd);
  popupAddForm.addEventListener('submit', createNewCard);
  buttonCloseView.addEventListener('click', closePopupView);

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', function (event) {
      if(event.target.classList.contains('popup__close-button') || event.target === event.currentTarget) {
        closePopup(popup)
      }
    });
  });