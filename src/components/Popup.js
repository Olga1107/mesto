export class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._closeEsc = this._exitPopup.bind(this);
    }
    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeEsc);
    };

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeEsc);
    };

    _exitPopup (evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        };
    };

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (event) => {
              if(event.target.classList.contains('popup__close-button') || event.target === event.currentTarget) {
                this.closePopup();
              }
            });
          };
    }