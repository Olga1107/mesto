export class FormValidator {
    constructor (setting, formElement) {
        this._formSelector = setting.formSelector;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector;
        this._inactiveButtonClass = setting.inactiveButtonClass;
        this._inputErrorClass = setting.inputErrorClass;
        this._errorClass = setting.errorClass;
        this._formElement = formElement;
    }

    // Проверка состояния полей ввода для активации/дезактивации кнопки "Сохранить"
    _toggleButtonState () {
        if(this._inputInvalid(this._inputs)) {
            this.disabledButton();
        } else {
          this._buttonSave.classList.remove(this._inactiveButtonClass);
          this._buttonSave.removeAttribute('disabled');
        }
      };
    
    // Метод проверки полей ввода на ошибки
    _inputInvalid () {
        return this._inputs.some(function (inputElement) {
              return !inputElement.validity.valid;
        });
      };

    
    // Метод проверки валидности полей ввода
    _checkInputValidity (inputElement, errors) {
        if (!inputElement.validity.valid) {
          this._showErrorInput(inputElement, errors);
        } else {
          this._closeErrorInput(inputElement, errors);
        }
      };
    
    // Метод вызова строки ошибки
    _showErrorInput (inputElement, errors) {
        inputElement.classList.add(this._inputErrorClass);
        errors.textContent = inputElement.validationMessage;
        errors.classList.add(this._errorClass);
      };
      
    // Метод, убирающий строку ошибки
    _closeErrorInput (inputElement, errors) {
        inputElement.classList.remove(this._inputErrorClass);
        errors.classList.remove(this._errorClass);
        errors.textContent = '';
      };

    // Дезактивация кнопки "Сохранить" при открытии попапа добавления места
    disabledButton() {
      this._buttonSave.classList.add(this._inactiveButtonClass);
      this._buttonSave.setAttribute('disabled', true);
    }

    // Метод включения валидации форм
    enableValidation() {
        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonSave = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this._formElement.addEventListener('input', ((evt) => {
            const inputElement = evt.target;
            const errors = this._formElement.querySelector(`#${inputElement.id}-error`);
            this._checkInputValidity(inputElement, errors);
            this._toggleButtonState();
          }));
    }
}