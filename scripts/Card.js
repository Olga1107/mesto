import {openViewPicture} from './index.js'

export class Card {
    constructor ({name, link}, data) {
        this._cardTemplate = data.cardTemplate;
        this._cardGallery = data.cardGallery;
        this._cardImage = data.cardImage;
        this._title = data.title;
        this._buttonLike = data.buttonLike;
        this._buttonRemove = data.buttonRemove;

        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardTemplate).content;
        this._cardElement = cardTemplate.querySelector(this._cardGallery).cloneNode(true);
        this._pictureView = this._cardElement.querySelector(this._cardImage);
        this._title = this._cardElement.querySelector(this._title);
        this._buttonLike = this._cardElement.querySelector(this._buttonLike);
        this._buttonRemove = this._cardElement.querySelector(this._buttonRemove);

        return cardTemplate;
    }

    _openViewPicture() {
        openViewPicture({name: this._name, link: this._link});
    }

    _likeStatus() {
        this._buttonLike.classList.toggle('photo-gallery__like-button_active');
    }

    _deleteCard() {
        this._cardElement.remove();
    }

    
    _setEventListeners() {
        this._pictureView.addEventListener('click', this._openViewPicture.bind(this)); 
        this._buttonLike.addEventListener('click', this._likeStatus.bind(this)); 
        this._buttonRemove.addEventListener('click', this._deleteCard.bind(this));
    }

    addCard() {
        this._getTemplate();
        this._pictureView.src = this._link;
        this._pictureView.alt = this._name;
        this._title.textContent = this._name;
        this._setEventListeners();
        return this._cardElement;
    };
}