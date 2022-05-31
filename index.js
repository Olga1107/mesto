let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

function openForm() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openForm);

let closeButton = document.querySelector('.popup__close-button');

function closeForm() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);


let profileName = document.getElementById('profilename');
let profileProfession = document.getElementById('profileprofession');


let nameInput = popup.querySelector('.popup__firstname');
let jobInput = popup.querySelector('.popup__about-self');


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closeForm ();
}

popup.addEventListener('submit', formSubmitHandler);