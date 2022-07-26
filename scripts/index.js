import * as consts from './consts.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

export default function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', closeByEscape)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(evt) {
    if (evt.key == 'Escape') {
        evt.preventDefault();
        const openPopup = document.querySelector('.popup_opened');
        closePopup(openPopup);
    }
}

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
    new FormValidator(consts.formSelectors, consts.profilePopup).enableValidation();
    openPopup(consts.profilePopup);
});

consts.tilesAddButton.addEventListener('click', () => {
    const tilesForm = consts.tilesPopup.querySelector('.popup__form'); 
    tilesForm.reset();
    new FormValidator(consts.formSelectors, tilesForm).enableValidation();
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