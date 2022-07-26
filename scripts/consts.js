export const initialCards = [
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

export const popups = document.querySelectorAll('.popup');

export const profileEditButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('#profile-popup');
export const profileFormElement = document.querySelector('#profile-popup__form');
export const nameInput = document.querySelector('#author-name-popup__input');
export const jobInput = document.querySelector('#author-job-popup__input');
export const name = document.querySelector('.profile__author-name');
export const job = document.querySelector('.profile__author-job');

export const tiles = document.querySelector('.tiles');
export const tilesAddButton = document.querySelector('.profile__add-button');
export const tilesPopup = document.querySelector('#tiles-popup');
export const tilesFormElement = document.querySelector('#tiles-popup__form');
export const placeInput = document.querySelector('#place-name-popup__input');
export const linkInput = document.querySelector('#place-link-popup__input');

export const imagePopup = document.querySelector('#image-popup');
export const popupImage = document.querySelector('.popup__image');
export const popupImageDescription = document.querySelector('.popup__image-description');

export const formSelectors = {
    inputSelector: '.popup__input',
    inputError: '.popup__input-error',
    submitButtonSelector: '.popup__save-button',
    inputActive: 'popup__input_active'
};

export const cardSelectors = {
  templateSelector: '#tile',
  cardSelector: '.tiles__item',
  imageSelector: '.tiles__image',
  titleSelector: '.tiles__title',
  likeSelector: '.tiles__like',
  likeActiveSelector: 'tiles__like_active',
  cardDeleteButtonSelector: '.tiles__delete-button'
}