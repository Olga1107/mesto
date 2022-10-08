import Popup from './Popup.js';

export class PopupConfirmation extends Popup {
    constructor (popupSelector, {submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this.form = this._popupSelector.querySelector('.form');
        this._submitButton = this.form.querySelector('.popup__save-button');
    }

    openPopup(card, idCard) {
      super.openPopup();
      this._idCard = idCard;
      this._card = card;
    }


    setEventListeners() {
      super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._card, this._idCard)
        });
      };

      isLoading(isLoad, text = 'Удаление...') {
        if (isLoad) {
          this._submitButton.textContent = text;
          this._submitButton.disabled = true;
          this._submitButton.classList.add('popup__save-button_disabled');
        } else {
          this._submitButton.textContent = this._submitBtn.value;
          this._submitButton.disabled = false;
          this._submitButton.classList.remove('popup__save-button_disabled');
        }
      }
}