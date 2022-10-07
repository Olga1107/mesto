import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, {submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this.form = this._popupSelector.querySelector('.form');
        this._inputs = this.form.querySelectorAll('.popup__input');
        this._submitButton = this.form.querySelector('.popup__save-button');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
          this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    
    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._getInputValues());
        });
      };

      closePopup() {
        super.closePopup();
        this.form.reset();
      };
}