import Popup from "./Popup.js"

export default class PopupWithOneButton extends Popup {
    constructor(popupSelector, selectors, formSelectors, formCallback) {
        super(popupSelector, selectors);
        this._formSelectors = formSelectors;
        this._formElement = this._popup.querySelector(formSelectors.formSelector);
        this.formCallback = formCallback;
        this._submitButton = this._popup.querySelector(formSelectors.submitButtonSelector);
        this._submitButtonDefaultValue = this._submitButton.value;
    }

    renderLoading (isLoading) {
        if (isLoading) {
        this._submitButton.value = 'Сохранение...'
        } else {
        this._submitButton.value = 'Да';
        }
    } 

    openPopup(item) {
        super.openPopup();
        this._item = item;
    }

    setEventListeners () {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formCallback(this._item);
            window.scrollTo(0, 0);
        });           
    }
}