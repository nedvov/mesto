import openPopup from './index.js';
import {popupImage, popupImageDescription, imagePopup} from './consts.js';

export default class Card {
    constructor(name, link, selectors) {
      this._name = name;
      this._link = link;
      this._selectors = selectors;
    }

    #increaseImage (target) {    
        popupImage.src = target.src;
        popupImage.alt = target.alt;
        popupImageDescription.textContent = target.name;
        openPopup(imagePopup);
    }
    
    #likeTile (target) {
        target.classList.toggle(this._selectors.likeActiveSelector);
    }
    
    #deleteTile (target) {
        target.parentElement.remove();
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
        const like = this._item.querySelector(this._selectors.likeSelector); 
        const deleteButton = this._item.querySelector(this._selectors.cardDeleteButtonSelector);
        this._image.addEventListener('click', (evt) => this.#increaseImage(evt.target)); 
        like.addEventListener('click', (evt) => this.#likeTile(evt.target));    
        deleteButton.addEventListener('click', (evt) => this.#deleteTile(evt.target));
    }

    returnTile () {
        this._item = this.#getTemplate();
        this._image = this._item.querySelector(this._selectors.imageSelector);
        const title = this._item.querySelector(this._selectors.titleSelector);
        this._image.src = this._link;
        this._image.name = this._name;
        this._image.alt = this._name;
        title.textContent = this._name;
        this.#setEventListeners();
        return this._item
    }
}