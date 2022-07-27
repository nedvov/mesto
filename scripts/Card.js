import {openPopup} from './utils.js';
import {popupImage, popupImageDescription, imagePopup} from './consts.js';

export default class Card {
    constructor(name, link, selectors) {
      this._name = name;
      this._link = link;
      this._selectors = selectors;
    }

    #increaseImage () {   
        popupImage.src = this._image.src;
        popupImage.alt = this._image.alt;
        popupImageDescription.textContent = this._image.name;
        openPopup(imagePopup);
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
        this._image.addEventListener('click', () => this.#increaseImage());
        this._like.addEventListener('click', () => this.#likeTile());    
        this._deleteButton.addEventListener('click', () => this.#deleteTile());
    }

    returnTile () {
        this._item = this.#getTemplate();
        this._image = this._item.querySelector(this._selectors.imageSelector);
        this._title = this._item.querySelector(this._selectors.titleSelector);
        this._image.src = this._link;
        this._image.name = this._name;
        this._image.alt = this._name;
        this._title.textContent = this._name;
        this.#setEventListeners();
        return this._item
    }
}