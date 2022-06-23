// Функция включения валидации форм
const enableValidation = function (setting) {
    const forms = Array.from(document.querySelectorAll(setting.formSelector));
    forms.forEach(function (formElement)  {
      formElement.addEventListener('submit', function (evt) 
      {evt.preventDefault()});
      setEventListeners (formElement, setting);
    });
  };
  
  // Настройка валидации форм
  const setEventListeners = function (formElement, setting) {
    const inputs = Array.from(formElement.querySelectorAll(setting.inputSelector));
    const buttonSave = formElement.querySelector(setting.submitButtonSelector);
    toggleButtonState(inputs, buttonSave, setting);
    inputs.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, setting);
        toggleButtonState(inputs, buttonSave, setting);
      });
    });
    formElement.addEventListener('reset', function () {
        disabledButton(buttonSave, setting)});
  };
  
  // Дезактивация кнопки "Сохранить" при открытии попапа добавления места
  function disabledButton(buttonSave, setting) {
    buttonSave.classList.add(setting.inactiveButtonClass);
    buttonSave.setAttribute('disabled', true);
  }
  
  // Проверка состояния полей ввода для активации/дезактивации кнопки "Сохранить"
  const toggleButtonState = function (inputs, buttonSave, setting) {
    if(inputInvalid(inputs)) {
      buttonSave.classList.add(setting.inactiveButtonClass);
      buttonSave.setAttribute('disabled', true);
    } else {
      buttonSave.classList.remove(setting.inactiveButtonClass);
      buttonSave.removeAttribute('disabled');
    }
  };
  
  // Функция проверки полей ввода на ошибки
  const inputInvalid = function (inputs) {
    return inputs.some(function (inputElement) {
          return !inputElement.validity.valid;
    });
  };
  
  // Функция проверки валидности полей ввода
  const checkInputValidity = function (formElement, inputElement, setting) {
    if (!inputElement.validity.valid) {
      showErrorInput(formElement, inputElement, inputElement.validationMessage, setting);
    } else {
      closeErrorInput(formElement, inputElement, setting);
    }
  };

  // Функция вызова строки ошибки
  const showErrorInput = function (formElement, inputElement, errorMessage, setting) {
    const errors = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(setting.inputErrorClass);
    errors.textContent = errorMessage;
    errors.classList.add(setting.errorClass);
  };
  
  // Функция, убирающая строку ошибки
  const closeErrorInput = function (formElement, inputElement, setting) {
    const errors = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(setting.inputErrorClass);
    errors.classList.remove(setting.errorClass);
    errors.textContent = '';
  };

 enableValidation({
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_active'
  });