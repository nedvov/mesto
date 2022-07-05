function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', closeByEscape)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', closeByEscape)
}

function clearForm(popup) {
    const inputs = popup.querySelectorAll('.popup__input');
    const inputErrors = popup.querySelectorAll('.popup__input-error');
    const form = popup.querySelector('.popup__form'); 
    inputs.forEach(element => {
        element.blur();
        element.classList.remove('popup__input_active');
    })
    inputErrors.forEach(element => {
        element.textContent = '';
    })
    form.reset();
}

function closeByEscape(evt) {
    if (evt.key == 'Escape') {
        const openPopup = document.querySelector('.popup_opened');
        if (openPopup.id != 'image-popup') {
            clearForm(openPopup);
        }   
        closePopup(openPopup);
    }
}

function increaseImage (target) {    
    popupImage.src = target.src;
    popupImage.alt = target.alt;
    popupImageDescription.textContent = target.name;
    openPopup(imagePopup);
}

function likeTile (target) {
    target.classList.toggle('tiles__like_active');
}

function deleteTile (target) {
    target.parentElement.remove();
}

function createTile (name, link) {
    const item = tileTemplate.querySelector('.tiles__item').cloneNode(true);
    const image = item.querySelector('.tiles__image');
    const title = item.querySelector('.tiles__title');
    image.src = link;
    image.name = name;
    image.alt = name;
    title.textContent = name;
    return item;
}

function submitProfileForm (evt) {
	evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(profilePopup);
    clearForm(profilePopup);
    window.scrollTo(0, 0);
}

function submitTilesForm (evt) {
	evt.preventDefault();
    const item = createTile (placeInput.value, linkInput.value);
    tiles.prepend(item);
    closePopup(tilesPopup);
    clearForm(tilesPopup);
    window.scrollTo(0, 0);
}

function getImageError(image) {
    image.onerror = "";
    image.src = "./images/ups2.png";
    return true;
}

function clickTile (evt) {
    if (evt.target.classList.contains("tiles__like")) {
        likeTile(evt.target)
    }
    else if (evt.target.classList.contains("tiles__delete-button")) {
        deleteTile(evt.target);
    }
    else if (evt.target.classList.contains("tiles__image")) {
        increaseImage (evt.target);
    }
}

for (let i = 0; i < initialCards.length; i++) {
    const item = createTile (initialCards[i].name, initialCards[i].link);
    tiles.prepend(item);
}

profileEditButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    openPopup(profilePopup);
    checkSubmitButtonState(profilePopup, dataForValidation);
});

tilesAddButton.addEventListener('click', () => {
    openPopup(tilesPopup)
    checkSubmitButtonState(tilesPopup, dataForValidation);
});

profileFormElement.addEventListener('submit', submitProfileForm);
tilesFormElement.addEventListener('submit', submitTilesForm);

tiles.addEventListener('click', clickTile);

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        const withinBoundaries = evt.composedPath().includes(popup.children[0]);
        if (evt.target.classList.contains('popup__close-button') || (!withinBoundaries)) {
            closePopup(popup);
            if (popup.id != 'image-popup') {
                clearForm(popup);
            } 
        }
    })
})