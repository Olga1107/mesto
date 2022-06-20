const popup = document.querySelector('.popup');

const editButton = document.querySelector('.profile__edit-button');
const closeButtonEditForm = document.querySelector('.popup__close-button-edit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');
const popupEditForm = document.querySelector('.edit-form');

const addButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.add-form');
const namePlaceInput = document.querySelector('.popup__input_data_place-name');
const urlPictureInput = document.querySelector('.popup__input_data_url-on-picture');
const closeButtonAddForm = document.querySelector('.popup__close-button-add');

const popupView = document.querySelector('.view-photo');
const popupCaption = document.querySelector('.popup__caption-photo');
const popupImage = document.querySelector('.popup__image');

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    popupEditForm.classList.add('popup_opened');
}

function closePopupEdit() {
    popupEditForm.classList.remove('popup_opened');
}

function formSubmitHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopupEdit ();
}

function openPopupAdd() {
    popupAddForm.classList.add('popup_opened');
}

function closePopupAdd() {
    urlPictureInput.value = '';
    namePlaceInput.value = '';
    popupAddForm.classList.remove('popup_opened');
}

function creatCard (evt) {
    evt.preventDefault();

    const cardElement = cardTemplate.querySelector('.photo-gallery__card').cloneNode(true);
    cardElement.querySelector('.photo-gallery__image').src = urlPictureInput.value;
    cardElement.querySelector('.photo-gallery__title').textContent = namePlaceInput.value;

    const likeButton = cardElement.querySelector('.photo-gallery__like-button');
    likeButton.addEventListener('click', function likeStatus() {
    likeButton.classList.toggle('photo-gallery__like-button_active');
    });

    const removeButton = cardElement.querySelector('.photo-gallery__remove-button');
    removeButton.addEventListener('click', function deleteCard () {
    const cardElement = removeButton.closest('.photo-gallery__card');
    cardElement.remove();
    });
    cardsGallery.prepend(cardElement);

    const openViewPicture = cardElement.querySelector('.photo-gallery__image');
    openViewPicture.addEventListener('click', function () {
      popupImage.src = cardElement.querySelector('.photo-gallery__image').src;
      popupCaption.textContent = cardElement.querySelector('.photo-gallery__title').textContent;
      popupView.classList.add('popup_opened');
    });
    closePopupAdd ();
  };

editButton.addEventListener('click', openPopupEdit);
closeButtonEditForm.addEventListener('click', closePopupEdit);
popupEditForm.addEventListener('submit', formSubmitHandlerEdit);

addButton.addEventListener('click', openPopupAdd);
closeButtonAddForm.addEventListener('click', closePopupAdd);
popupAddForm.addEventListener('submit', creatCard);


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

  const cardTemplate = document.querySelector('#card').content;
  const cardsGallery = document.querySelector('.photo-gallery');

  initialCards.forEach (function creatInitialCards (element) {

  const cardElement = cardTemplate.querySelector('.photo-gallery__card').cloneNode(true);
  cardElement.querySelector('.photo-gallery__image').src = element.link;
  cardElement.querySelector('.photo-gallery__title').textContent = element.name;

  const likeButton = cardElement.querySelector('.photo-gallery__like-button');
  likeButton.addEventListener('click', function likeStatus() {
    likeButton.classList.toggle('photo-gallery__like-button_active');
  });

  const removeButton = cardElement.querySelector('.photo-gallery__remove-button');
  removeButton.addEventListener('click', function deleteCard () {
  const cardElement = removeButton.closest('.photo-gallery__card');
    cardElement.remove();
  });

  const openViewPicture = cardElement.querySelector('.photo-gallery__view-button');
  openViewPicture.addEventListener('click', function () {
    popupCaption.textContent = element.name;
    popupImage.src = element.link;
    popupView.classList.add('popup_opened');
  });

  cardsGallery.append(cardElement);
  });

  const closeButtonView = document.querySelector('.popup__close-button-view');

  closeButtonView.addEventListener('click', function closePopupView() {
    popupView.classList.remove('popup_opened');
})
