export default class FormValidator {
    constructor(selectors, objectForValidation) {
        this.selectors = selectors;
        this.objectForValidation = objectForValidation;
        this._inputList = Array.from(this.objectForValidation.querySelectorAll(this.selectors.inputSelector));
        this._submitButton = this.objectForValidation.querySelector(this.selectors.submitButtonSelector);
        this._inputErrors = Array.from(this.objectForValidation.querySelectorAll(this.selectors.inputError)); 
    }
    #clearForm() {
        this._inputList.forEach(element => {
            element.blur();
            element.classList.remove(this.selectors.inputActive);
        })
        this._inputErrors.forEach(element => {
            element.textContent = '';
        })
    }
    #checkSubmitButtonState() {
        const validity = this._inputList.every(element => {return element.validity.valid})
        if (validity) {
            this._submitButton.removeAttribute("disabled")
        }
        else {
            this._submitButton.setAttribute("disabled", true)
        }
    }
    #checkInput(input) {
        if (input.validity.valid) {
            input.nextElementSibling.textContent= "";
        }
        else {      
            input.nextElementSibling.textContent=input.validationMessage;
            input.classList.add(this.selectors.inputActive);
        };
    }
    #setEventListeners() {
        this._inputList.forEach(element => {
            element.addEventListener("input", () => {
                this.#checkInput(element)
                this.#checkSubmitButtonState()
            })   
        })
    }
    enableValidation() {
        this.#clearForm();
        this.#checkSubmitButtonState();
        this.#setEventListeners();
    }
}