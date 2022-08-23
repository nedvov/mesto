export default class Card {
    constructor({name, link, likes, owner, _id}, selectors, handleCardClick, handleCardDelete, handleCardLike, handleCardDislike, myId) {
        this._id = _id;
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._selectors = selectors;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._handleCardDislike = handleCardDislike;
        this._isLiked = !!likes.find(item => item._id == myId);        
        this._mine = (owner._id == myId);
    }

    #getTemplate () {
        const item = document
            .querySelector(this._selectors.templateSelector)
            .content
            .querySelector(this._selectors.cardSelector)
            .cloneNode(true);
        return item;
    }

    #setEventListeners() {
        this._image.addEventListener('click', () => this._handleCardClick(this._image));
        this._like.addEventListener('click', () => {(!this._isLiked) ? this._handleCardLike(this) : this._handleCardDislike(this)})   
        this._deleteButton.addEventListener('click', () => this._handleCardDelete(this));
    }

    returnTile () {
        this._item = this.#getTemplate();
        this._image = this._item.querySelector(this._selectors.imageSelector);
        this._title = this._item.querySelector(this._selectors.titleSelector);
        this._likesCount = this._item.querySelector(this._selectors.likesCountSelector);
        this._like = this._item.querySelector(this._selectors.likeSelector); 
        this._deleteButton = this._item.querySelector(this._selectors.cardDeleteButtonSelector);
        this._image.src = this._link;
        this._image.name = this._name;
        this._image.alt = this._name;
        this._title.textContent = this._name;
        this._likesCount.textContent =  this._likes.length;
        this.#setEventListeners();
        if (!this._mine) {
            this._deleteButton.remove();
        }
        if (this._isLiked) {
            this._like.classList.add(this._selectors.likeActiveSelector);
        }
        return this._item
    }
}