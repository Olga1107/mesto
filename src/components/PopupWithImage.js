import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popupSelector, pictureView, titleView) {
        super (popupSelector);
        this._pictureView = pictureView;
        this._titleView = titleView;
    }

    openPopup ({name, link}) {
        this._pictureView.setAttribute('src', link);
        this._pictureView.setAttribute('alt', name);
        this._titleView.textContent = name;
        super.openPopup();
    }
}
