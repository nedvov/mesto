import {popupSelectors, formSelectors, cardSelectors, UserInfoSelectors, tilesFormElement, profileFormElement, avatarFormElement, initialCards, profileEditButton, tilesAddButton, avatarEditButton} from "../utils/constants.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithOneButton from '../components/PopupWithOneButton.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';
import {getImageError} from '../utils/utils.js';
import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'bd312182-f682-4611-bb11-842bf508484e',
    'Content-Type': 'application/json'
  }
});

const tilesRenderer = (target) => {
  const tile = new Card(target, cardSelectors, imagePopup.openPopup.bind(imagePopup), surePopup.openPopup.bind(surePopup), likeCallback, dislikeCallback, userProfile.getUserId()).returnTile()
  tilesSection.addItem(tile)
}

const userProfile = new UserInfo(UserInfoSelectors.name, UserInfoSelectors.about, UserInfoSelectors.avatar);
const tilesSection = new Section(tilesRenderer, cardSelectors.sectionSelector);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(values => {
    const [initialUser, initialCards] = values;
    userProfile.setUserInfo(initialUser);
    userProfile.setAvatar(initialUser);
    tilesSection.renderSection(initialCards);
  })
  .catch(err => console.log(err))

const tilesCallback = (target) => {
  tilesPopup.renderLoading(true)
  api.addNewCard(target.name, target.link)
    .then(data => {
      tilesSection.renderSection([data])
      tilesPopup.closePopup()
    })
    .catch(err => console.log(err))
    .finally(() => tilesPopup.renderLoading(false))    
}

const profileCallback = (target) => {
 profilePopup.renderLoading(true)
  api.setUserInfo(target.name, target.about)
    .then((data) => {
      userProfile.setUserInfo(data)
      profilePopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally(() => profilePopup.renderLoading(false))
}

const avatarCallback = (target) => {
  avatarPopup.renderLoading(true);
  api.setUserAvatar(target.avatar)
  .then((data) => {
    userProfile.setAvatar(data)
    avatarPopup.closePopup();
  })
  .catch(err => console.log(err))
  .finally(() => avatarPopup.renderLoading(false))
}

const sureCallback = (target) => {
  surePopup.renderLoading(true)
  api.deleteCard(target._id)
  .then(() => {
    target.deleteTile();
    surePopup.closePopup();
  })
  .catch(err => console.log(err))
  .finally(() => surePopup.renderLoading(false))
}

const likeCallback = (target) => {
  api.likeCard(target._id)
  .then(data => {
    target.likeTile(data.likes.length);  
  })
  .catch(err => console.log(err))
}

const dislikeCallback = (target) => {
  api.dislikeCard(target._id)
  .then(data => {
    target.dislikeTile(data.likes.length);
  })
  .catch(err => console.log(err))
}

const tilesPopup = new PopupWithForm(popupSelectors.tilesPopup, popupSelectors, formSelectors, tilesCallback);
const profilePopup = new PopupWithForm(popupSelectors.profilePopup, popupSelectors, formSelectors, profileCallback);
const avatarPopup = new PopupWithForm(popupSelectors.avatarPopup, popupSelectors, formSelectors, avatarCallback);
const imagePopup = new PopupWithImage(popupSelectors.imagePopup, popupSelectors);
const surePopup = new PopupWithOneButton(popupSelectors.surePopup, popupSelectors, formSelectors, sureCallback);

const tilesFormValidator = new FormValidator(formSelectors, tilesFormElement);
const profileFormValidator = new FormValidator(formSelectors, profileFormElement);
const avatarFormValidator = new FormValidator(formSelectors, avatarFormElement);

tilesPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();
surePopup.setEventListeners();

profileFormValidator.enableValidation();
tilesFormValidator.enableValidation();
avatarFormValidator.enableValidation();

profileEditButton.addEventListener('click', () => {
    profilePopup.setInputValues(userProfile.getUserInfo())
    profileFormValidator.clearForm();
    profileFormValidator.checkSubmitButtonState();
    profilePopup.openPopup();
});

tilesAddButton.addEventListener('click', () => {
    tilesFormValidator.clearForm();
    tilesFormValidator.checkSubmitButtonState();
    tilesPopup.openPopup();    
});

avatarEditButton.addEventListener('click', () => {
  avatarFormValidator.clearForm();
  avatarFormValidator.checkSubmitButtonState();
  avatarPopup.openPopup();    
});

window.getImageError = getImageError;