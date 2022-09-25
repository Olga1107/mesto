export class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }
    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._exitPopup.bind(this));
    };

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._exitPopup.bind(this));
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