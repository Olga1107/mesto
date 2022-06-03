let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.getElementById('profilename');
let profileProfession = document.getElementById('profileprofession');
let nameInput = document.getElementById('popupfirstname');
let jobInput = document.getElementById('popupaboutself');
let popupEditForm = document.querySelector('.popup__container');

function openForm() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function closeForm() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closeForm ();
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
popupEditForm.addEventListener('submit', formSubmitHandler);