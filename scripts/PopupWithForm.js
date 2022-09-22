import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this.forms = this._popupSelector.querySelector('.form');
        this._inputs = this.forms.querySelectorAll('.popup__input');
        this._submitButton = this.forms.querySelector('.popup__save-button');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
          this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.forms.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._getInputValues());
        });
      }

      closePopup() {
        super.closePopup();
        this.forms.reset();
      }
}