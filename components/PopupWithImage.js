import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector, selectors) {
        super(popupSelector, selectors);
        this._popupSelectors = selectors;
    }

    openPopup(image) {
        super.openPopup();
        const popupImage = document.querySelector(this._popupSelectors.popupImage);
        const popupImageDescription = document.querySelector(this._popupSelectors.popupImageDescription);
        popupImage.src = image.src;
        popupImage.alt = image.alt;
        popupImageDescription.textContent = image.name;
    }
}