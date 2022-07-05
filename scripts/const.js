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

const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const profileFormElement = document.querySelector('#profile-popup__form');
const nameInput = document.querySelector('#author-name-popup__input');
const jobInput = document.querySelector('#author-job-popup__input');
const name = document.querySelector('.profile__author-name');
const job = document.querySelector('.profile__author-job');

const tiles = document.querySelector('.tiles');
const tilesAddButton = document.querySelector('.profile__add-button');
const tilesPopup = document.querySelector('#tiles-popup');
const tilesFormElement = document.querySelector('#tiles-popup__form');
const placeInput = document.querySelector('#place-name-popup__input');
const linkInput = document.querySelector('#place-link-popup__input');

const imagePopup = document.querySelector('#image-popup');
const popupImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__image-description');

const dataForValidation = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_active'
};