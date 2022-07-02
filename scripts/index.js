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

const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const formElement = document.querySelector('#profile-popup__form');
const nameInput = document.querySelector('#author-name-popup__input');
const jobInput = document.querySelector('#author-job-popup__input');
const name = document.querySelector('.profile__author-name');
const job = document.querySelector('.profile__author-job');
const profileCloseButton = document.querySelector('#profile-popup__close-button');

const tiles = document.querySelector('.tiles');
const addButton = document.querySelector('.profile__add-button');
const tilesPopup = document.querySelector('#tiles-popup');
const tilesFormElement = document.querySelector('#tiles-popup__form');
const placeInput = document.querySelector('#place-name-popup__input');
const linkInput = document.querySelector('#place-link-popup__input');
const tilesCloseButton = document.querySelector('#tiles-popup__close-button');

const imagePopup = document.querySelector('#image-popup');
const popupImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__image-description');
const imageCloseButton = document.querySelector('#image-popup__close-button');

function scale (target) {    
    popupImage.src = target.src;
    popupImage.alt = target.alt;
    popupImageDescription.textContent = target.name;
    imagePopup.classList.remove('popup_hidden');
    imagePopup.classList.add('popup_opened');    
}

function like (target) {
    target.classList.toggle('tiles__like_active');
}

function del (target) {
    target.parentElement.remove();
}

function create_tile (name, link) {
    const item = tileTemplate.querySelector('.tiles__item').cloneNode(true);
    const image = item.querySelector('.tiles__image');
    const title = item.querySelector('.tiles__title');
    image.src = link;
    image.name = name;
    image.alt = name;
    title.textContent = name;
    tiles.prepend(item);
}

function formSubmitHandler (evt) {
	evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    profilePopup.classList.add('popup_hidden');
    profilePopup.classList.remove('popup_opened');
    window.scrollTo(0, 0);
}

function tilesFormSubmitHandler (evt) {
	evt.preventDefault();
    create_tile (placeInput.value, linkInput.value);
    tilesPopup.classList.add('popup_hidden');
    tilesPopup.classList.remove('popup_opened');
    window.scrollTo(0, 0);
    placeInput.value = '';
    linkInput.value = '';
}

function editProfile () {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    profilePopup.classList.add('popup_opened');
    profilePopup.classList.remove('popup_hidden');
}

function closeProfile () {
    profilePopup.classList.add('popup_hidden');
    profilePopup.classList.remove('popup_opened');
}

function addTile () {
    tilesPopup.classList.add('popup_opened');
    tilesPopup.classList.remove('popup_hidden');
}

function closeTile () {
    tilesPopup.classList.add('popup_hidden');
    tilesPopup.classList.remove('popup_opened');
    placeInput.value = '';
    linkInput.value = '';
}

function closeImage () {
    imagePopup.classList.add('popup_hidden');
    imagePopup.classList.remove('popup_opened');
}

function imgError(image) {
    image.onerror = "";
    image.src = "./images/ups2.png";
    return true;
}

function clickTile (event) {
    if (event.target.classList.contains("tiles__like")) {
        like(event.target)
    }
    else if (event.target.classList.contains("tiles__delete-button")) {
        del(event.target);
    }
    else if (event.target.classList.contains("tiles__image")) {
        scale (event.target);
    }
}

for (let i = 0; i < initialCards.length; i++) {
    create_tile (initialCards[i].name, initialCards[i].link);
}

editButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', closeProfile);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', addTile);
tilesCloseButton.addEventListener('click', closeTile);
imageCloseButton.addEventListener('click', closeImage);
tilesFormElement.addEventListener('submit', tilesFormSubmitHandler);
tiles.addEventListener('click', clickTile);