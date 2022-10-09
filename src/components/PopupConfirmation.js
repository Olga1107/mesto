import Popup from './Popup.js';

export class PopupConfirmation extends Popup {
    constructor (popupSelector, {submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this.form = this._popupSelector.querySelector('.form');
        this._submitButton = this.form.querySelector('.popup__save-button');
    }

    openPopup(item, idItem) {
      super.openPopup();
      this._idItem = idItem;
      this._item = item;
    }


    setEventListeners() {
      super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._item, this._idItem)
        });
      };

      isLoading(isLoad, text = 'Удаление...') {
        if (isLoad) {
          this._submitButton.textContent = text;
          this._submitButton.disabled = true;
          this._submitButton.classList.add('popup__save-button_disabled');
        } else {
          this._submitButton.disabled = false;
          this._submitButton.classList.remove('popup__save-button_disabled');
        }
      }
}