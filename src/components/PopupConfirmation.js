import {Popup} from './Popup.js';

export class PopupConfirmation extends Popup {
    constructor (popupSelector, {submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this.form = this._popupSelector.querySelector('.form');
        this._submitButton = this.form.querySelector('.popup__save-button');
    }
  
    setEventListeners() {
        this.form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm();
        });
      };
}