import {openPopup} from './index.js'

export class Card {
    constructor ({name, link}) {
        this._cardTemplate = document.querySelector('#card').content;
        this._cardElement = this._cardTemplate.querySelector('.photo-gallery__card').cloneNode(true);
        this._pictureView = this._cardElement.querySelector('.photo-gallery__image');
        this._title = this._cardElement.querySelector('.photo-gallery__title');
        this._buttonLike = this._cardElement.querySelector('.photo-gallery__like-button');
        this._buttonRemove = this._cardElement.querySelector('.photo-gallery__remove-button');
        this._pictureCaption = document.querySelector('.popup__caption-photo');
        this._picture = document.querySelector('.popup__image');
        this._popupView = document.querySelector('.view-photo');

        this._pictureView.src = link;
        this._pictureView.alt = name;
        this._title.textContent = name;
        this._pictureCaption.textContent = name;
        this._picture.src = link;
        this._picture.alt = name;

        this._pictureView.addEventListener('click', this._openPhoto.bind(this));
        this._buttonLike.addEventListener('click', this._likeStatus.bind(this));
        this._buttonRemove.addEventListener('click', this._deleteCard.bind(this)); 
    
        return this._cardElement
    }

    _openPhoto() {
        openPopup(this._popupView);
    }

    _likeStatus() {
        this._buttonLike.classList.toggle('photo-gallery__like-button_active');
    }

    _deleteCard() {
        this._cardElement.remove();
    }

    addCard() {
        return this._cardElement
    };
}
