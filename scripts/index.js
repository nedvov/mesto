const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const tileTemplate = document.querySelector('#tile').content;
const popups = document.querySelectorAll('.popup');

const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const profileFormElement = document.querySelector('#profile-popup__form');
const nameInput = document.querySelector('#author-name-popup__input');
const jobInput = document.querySelector('#author-job-popup__input');
const name = document.querySelector('.profile__author-name');
const job = document.querySelector('.profile__author-job');

const tiles = document.querySelector('.tiles');
const addButton = document.querySelector('.profile__add-button');
const tilesPopup = document.querySelector('#tiles-popup');
const tilesFormElement = document.querySelector('#tiles-popup__form');
const placeInput = document.querySelector('#place-name-popup__input');
const linkInput = document.querySelector('#place-link-popup__input');

const imagePopup = document.querySelector('#image-popup');
const popupImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__image-description');

const validationData = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_active'
  };

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.remove('popup_hidden');
    if (popup.id != 'image-popup') {
        checkSubmitButtonState(popup, validationData);
    }
    document.addEventListener('keydown', closeByEscape)
}

function closePopup(popup) {
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
    if (popup.id != 'image-popup') {
        form.reset();
    }    
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(evt) {
    if (evt.key == 'Escape') {
        const openPopup = document.querySelector('.popup_opened')
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
    const like = item.querySelector('.tiles__like');
    const deleteButton = item.querySelector('.tiles__delete-button');
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
    window.scrollTo(0, 0);
}

function submitTilesForm (evt) {
	evt.preventDefault();
    const item = createTile (placeInput.value, linkInput.value);
    tiles.prepend(item);
    closePopup(tilesPopup);
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

function profile_save_button_state() {
    if (nameInput.checkValidity() && jobInput.checkValidity()) {
        profile_save_button.removeAttribute("disabled")
    }
    else {
        profile_save_button.setAttribute("disabled", true)
    }
};

function tiles_save_button_state() {
    if (placeInput.checkValidity() && linkInput.checkValidity()) {
        tiles_save_button.removeAttribute("disabled")
    }
    else {
        tiles_save_button.setAttribute("disabled", true)
    }
};

for (let i = 0; i < initialCards.length; i++) {
    const item = createTile (initialCards[i].name, initialCards[i].link);
    tiles.prepend(item);
}

editButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    openPopup(profilePopup);
});

addButton.addEventListener('click', () => openPopup(tilesPopup));

profileFormElement.addEventListener('submit', submitProfileForm);
tilesFormElement.addEventListener('submit', submitTilesForm);

tiles.addEventListener('click', clickTile);

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        const withinBoundaries = evt.composedPath().includes(popup.children[0]);
        if (evt.target.classList.contains('popup__close-button') || (!withinBoundaries)) {
            closePopup(popup);
        }
    })
})