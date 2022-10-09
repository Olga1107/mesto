export class Card {
    constructor (card, data, openViewPicture, deleteCard, likeCard, userInfo) {
        this._cardTemplate = data.cardTemplate;
        this._cardGallery = data.cardGallery;
        this._cardImage = data.cardImage;
        this._title = data.title;
        this._buttonLike = data.buttonLike;
        this._activeLike = data.activeLike;
        this._numberLikes = data.numberLikes;
        this._buttonRemove = data.buttonRemove;

        this._openViewPicture = openViewPicture;
        this._deleteCard = deleteCard;
        this._likeCard =likeCard;
        this._userInfo = userInfo;

        this._name = card.name;
        this._link = card.link;
        this._idCard = card._id;
        this._author = card.owner.name;
        this._authorId = card.owner._id;
        this._likes = card.likes;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardTemplate).content;
        this._cardElement = cardTemplate.querySelector(this._cardGallery).cloneNode(true);
        this._pictureView = this._cardElement.querySelector(this._cardImage);
        this._title = this._cardElement.querySelector(this._title);
        this._buttonLike = this._cardElement.querySelector(this._buttonLike);
        this._numberLikes = this._cardElement.querySelector(this._numberLikes);
        this._buttonRemove = this._cardElement.querySelector(this._buttonRemove);

        return cardTemplate;
    }

    addLikeClass() {
        this._buttonLike.classList.add(this._activeLike);
    }

    removeLikeClass() {
        this._buttonLike.classList.remove(this._activeLike);
    }

    removeCard() {
        this._cardElement.remove();
    }
    
    _setEventListeners() {
        this._pictureView.addEventListener('click', () => {this._openViewPicture({name: `Автор: ${this._author}. Описание: ${this._name}`, link: this._link})}); 
        this._buttonLike.addEventListener('click', () => {this._likeCard(this._buttonLike, this._activeLike, this._idCard, this._numberLikes)});
        this._buttonRemove.addEventListener('click', () => {this._deleteCard(this._cardElement, this._idCard)});
    }

    _checkLikeCard() {
        if (this._likes.some((like) => like._id === this._userInfo.getUserId())) {
          this._buttonLike.classList.add(this._activeLike);
        }
      }

    addCard() {
        this._getTemplate();
        this._pictureView.src = this._link;
        this._pictureView.alt = this._name;
        this._title.textContent = this._name;
        this._numberLikes.textContent = this._likes.length;
        if (this._authorId !== this._userInfo.getUserId()) {
            this._buttonRemove.remove();
        }
        this._setEventListeners();
        this._checkLikeCard();
        return this._cardElement;
    };
}