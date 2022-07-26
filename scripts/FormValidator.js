export default class FormValidator {
    constructor(selectors, objectForValidation) {
        this.selectors = selectors;
        this.objectForValidation = objectForValidation;
    }
    #clearForm(objectForValidation, {inputSelector, inputError, inputActive, ...rest}) {
        const inputs = objectForValidation.querySelectorAll(inputSelector);
        const inputErrors = objectForValidation.querySelectorAll(inputError);
        inputs.forEach(element => {
            element.blur();
            element.classList.remove(inputActive);
        })
        inputErrors.forEach(element => {
            element.textContent = '';
        })
    }
    #checkSubmitButtonState(objectForValidation, {inputSelector, submitButtonSelector, ...rest}) {
        const popupInputs = Array.from(objectForValidation.querySelectorAll(inputSelector));
        const saveButton = objectForValidation.querySelector(submitButtonSelector);
        const validity = popupInputs.every(element => {return element.validity.valid})
        if (validity) {
            saveButton.removeAttribute("disabled")
        }
        else {
            saveButton.setAttribute("disabled", true)
        }
    }
    #checkInput(input, inputActive) {
        if (input.validity.valid) {
            input.nextElementSibling.textContent= "";
        }
        else {      
            input.nextElementSibling.textContent=input.validationMessage;
            input.classList.add(inputActive);
        };
    }
    #setEventListeners(inputs, {inputActive, ...rest}) {
        inputs.forEach(element => {
            element.addEventListener("input", () => {
                this.#checkInput(element, inputActive)
                this.#checkSubmitButtonState(element.parentNode, rest)
            })   
        })
    }
    enableValidation() {
        this.#clearForm(this.objectForValidation, this.selectors);
        this.#checkSubmitButtonState(this.objectForValidation, this.selectors);
        const inputs = this.objectForValidation.querySelectorAll(this.selectors.inputSelector);
        this.#setEventListeners(inputs, this.selectors);
    }
}