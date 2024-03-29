import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, selectors, formSelectors, formCallback) {
        super(popupSelector, selectors);
        this._formSelectors = formSelectors;
        this._formElement = this._popup.querySelector(formSelectors.formSelector);
        this.formCallback = formCallback;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputSelector));
        this._submitButton = this._popup.querySelector(formSelectors.submitButtonSelector);
        this._submitButtonDefaultValue = this._submitButton.value;
    }

    renderLoading (isLoading) {
        if (isLoading) {
        this._submitButton.value = 'Сохранение...'
        } else {
        this._submitButton.value = 'Сохранить';
        }
    } 

    closePopup () {
        super.closePopup();
        this._formElement.reset();
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
      } 

    setInputValues (data) {
        Object.keys(data).forEach(key => {
            const keyInput = this._inputList.find(item => item.name == key);
            keyInput.value = data[key]
        })
    }

    setEventListeners () {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formCallback(this._getInputValues());
            window.scrollTo(0, 0);
        });           
    }
}