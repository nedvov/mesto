import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, selectors, formSelectors, formCallback) {
        super(popupSelector, selectors);
        this._formSelectors = formSelectors;
        this._formElement = document.querySelector(popupSelector).querySelector(formSelectors.formSelector);
        this.formCallback = formCallback;
        this._inputList = this._formElement.querySelectorAll(this._formSelectors.inputSelector);
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

    setInputValues (valueFirst, valueSecond) {
        this._inputList[0].value = valueFirst;
        this._inputList[1].value = valueSecond;
    }

    setEventListeners () {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formCallback(this);
            this.closePopup();
            window.scrollTo(0, 0);
        });           
    }
}