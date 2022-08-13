import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector, selectors) {
        super(popupSelector, selectors);
        this._popupSelectors = selectors;
        this._popupImage = document.querySelector(this._popupSelectors.popupImage);
        this._popupImageDescription = document.querySelector(this._popupSelectors.popupImageDescription);
    }

    openPopup(image) {
        super.openPopup();
        this._popupImage.src = image.src;
        this._popupImage.alt = image.alt;
        this._popupImageDescription.textContent = image.name;
    }
}