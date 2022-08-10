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

export const formSelectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputError: '.popup__input-error',
    submitButtonSelector: '.popup__save-button',
    inputActive: 'popup__input_active'
};

export const cardSelectors = {
  templateSelector: '#tile',
  sectionSelector: '.tiles',
  cardSelector: '.tiles__item',
  imageSelector: '.tiles__image',
  titleSelector: '.tiles__title',
  likeSelector: '.tiles__like',
  likeActiveSelector: 'tiles__like_active',
  cardDeleteButtonSelector: '.tiles__delete-button'
}

export const popupSelectors = {
  profilePopup: '#profile-popup',
  tilesPopup: '#tiles-popup',
  imagePopup: '#image-popup',
  openSelector: 'popup_opened',
  hiddenSelector: 'popup_hidden',
  closeButton: 'popup__close-button',
  popupImage: '.popup__image',
  popupImageDescription: '.popup__image-description'
}

export const UserInfoSelectors = {
  name: '.profile__author-name',
  job: '.profile__author-job'
}

export const tilesFormElement = document.querySelector('#tiles-popup__form');
export const profileFormElement = document.querySelector('#profile-popup__form');

export const tilesAddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');