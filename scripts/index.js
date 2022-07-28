import * as consts from './consts.js';
import {openPopup, closePopup} from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const tilesFormValidator = new FormValidator(consts.formSelectors, consts.tilesFormElement)
const profileFormValidator = new FormValidator(consts.formSelectors, consts.profileFormElement)

tilesFormValidator.enableValidation();
profileFormValidator.enableValidation();

function submitProfileForm (evt) {
	evt.preventDefault();
    consts.name.textContent = consts.nameInput.value;
    consts.job.textContent = consts.jobInput.value;
    closePopup(consts.profilePopup);
    window.scrollTo(0, 0);
}

function submitTilesForm (evt) {
	evt.preventDefault();
    consts.tiles.prepend(new Card(consts.placeInput.value, consts.linkInput.value, consts.cardSelectors).returnTile());
    closePopup(consts.tilesPopup);
    window.scrollTo(0, 0);
}

consts.profileEditButton.addEventListener('click', () => {
    consts.nameInput.value = consts.name.textContent;
    consts.jobInput.value = consts.job.textContent;
    profileFormValidator.clearForm();
    profileFormValidator.checkSubmitButtonState();    
    openPopup(consts.profilePopup);
});

consts.tilesAddButton.addEventListener('click', () => {
    consts.tilesFormElement.reset();
    tilesFormValidator.clearForm();
    tilesFormValidator.checkSubmitButtonState();    
    openPopup(consts.tilesPopup);    
});

consts.profileFormElement.addEventListener('submit', submitProfileForm);
consts.tilesFormElement.addEventListener('submit', submitTilesForm);

consts.popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        const withinBoundaries = evt.composedPath().includes(popup.children[0]);
        if (evt.target.classList.contains('popup__close-button') || (!withinBoundaries)) {
            closePopup(popup);
        }
    })
})

for (let i = 0; i < consts.initialCards.length; i++) {
    consts.tiles.prepend(new Card(consts.initialCards[i].name, consts.initialCards[i].link, consts.cardSelectors).returnTile());
}
