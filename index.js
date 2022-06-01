let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.getElementById('profilename');
let profileProfession = document.getElementById('profileprofession');
let nameInput = document.getElementById('popupfirstname');
let jobInput = document.getElementById('popupaboutself');

function openForm() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

editButton.addEventListener('click', openForm);

function closeForm() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closeForm ();
}

popup.addEventListener('submit', formSubmitHandler);