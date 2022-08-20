export default class Card {
    constructor({name, link, likes = []}, selectors, handleCardClick, handleCardDelete) {
        this._name = name;
        this._link = link;
        this._likesCount = likes.length;
        this._selectors = selectors;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
    }
    
    #likeTile () {
        this._like.classList.toggle(this._selectors.likeActiveSelector);
    }
    
    #deleteTile () {
        this._item.remove();
        this._item = null;
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
        this._like = this._item.querySelector(this._selectors.likeSelector); 
        this._deleteButton = this._item.querySelector(this._selectors.cardDeleteButtonSelector);
        this._image.addEventListener('click', () => this._handleCardClick(this._image));
        this._like.addEventListener('click', () => this.#likeTile());    
        this._deleteButton.addEventListener('click', () => this._handleCardDelete(this._item));
    }

    returnTile () {
        this._item = this.#getTemplate();
        this._image = this._item.querySelector(this._selectors.imageSelector);
        this._title = this._item.querySelector(this._selectors.titleSelector);
        this._likes = this._item.querySelector(this._selectors.likesCountSelector);
        this._image.src = this._link;
        this._image.name = this._name;
        this._image.alt = this._name;
        this._title.textContent = this._name;
        this.#setEventListeners();
        this._likes.textContent =  this._likesCount;
        return this._item
    }
}