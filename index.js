let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

function openForm() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openForm);

let closeButton = document.querySelector('.popup__close-icon');

function closeForm() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);


let profileName = document.getElementById('profilename');
let profileProfession = document.getElementById('profileprofession');
// Находим поля формы в DOM
let nameInput = popup.querySelector('.popup__firstname');
let jobInput = popup.querySelector('.popup__about-self');


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
profileName.textContent = nameInput.value;
profileProfession.textContent = jobInput.value;

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler);