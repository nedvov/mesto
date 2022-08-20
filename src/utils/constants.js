export const initialCards = [
    {
      likes: ["user1", "user2"],
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      likes: ["user1", "user2"],
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      likes: ["user1", "user2"],
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      likes: ["user1", "user2"],
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      likes: ["user1", "user2"],
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      likes: ["user1", "user2", "user3"],
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
  cardDeleteButtonSelector: '.tiles__delete-button',
  likesCountSelector: '.tiles__like-count'
}

export const popupSelectors = {
  profilePopup: '#profile-popup',
  tilesPopup: '#tiles-popup',
  imagePopup: '#image-popup',
  avatarPopup: '#avatar-popup',
  surePopup: '#sure-popup',
  openSelector: 'popup_opened',
  hiddenSelector: 'popup_hidden',
  closeButton: 'popup__close-button',
  popupImage: '.popup__image',
  popupImageDescription: '.popup__image-description'
}

export const UserInfoSelectors = {
  name: '.profile__author-name',
  job: '.profile__author-job',
  avatar: '.profile__avatar-image'
}

export const tilesFormElement = document.querySelector('#tiles-popup__form');
export const profileFormElement = document.querySelector('#profile-popup__form');
export const avatarFormElement = document.querySelector('#avatar-popup__form');

export const tilesAddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-button');