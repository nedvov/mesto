function checkSubmitButtonState(inputsParent, {inputSelector, submitButtonSelector, ...rest}) {
    const popupInputs = Array.from(inputsParent.querySelectorAll(inputSelector));
    const saveButton = inputsParent.querySelector(submitButtonSelector);
    const validity = popupInputs.every(element => {return element.validity.valid})
    if (validity) {
        saveButton.removeAttribute("disabled")
    }
    else {
        saveButton.setAttribute("disabled", true)
    }
}

function checkInput(input, inputErrorClass) {
    if (input.validity.valid) {
        input.nextElementSibling.textContent= "";
    }
    else {      
        input.nextElementSibling.textContent=input.validationMessage;
        input.classList.add(inputErrorClass);
    };
}

function setEventListeners(inputs, {inputErrorClass, ...rest}) {
    inputs.forEach(element => {
        element.addEventListener("input", () => {
            checkInput(element, inputErrorClass)
            checkSubmitButtonState(element.parentNode, rest)
        })   
    })
}

function enableValidation(data) {
    const inputs = document.querySelectorAll(data.inputSelector);
    setEventListeners(inputs, data);
}

enableValidation(validationData);