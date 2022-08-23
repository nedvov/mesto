import {popupSelectors, formSelectors, cardSelectors, UserInfoSelectors, tilesFormElement, profileFormElement, avatarFormElement, initialCards, profileEditButton, tilesAddButton, avatarEditButton} from "../utils/constants.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithOneButton from '../components/PopupWithOneButton.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';
import {getImageError, renderLoading} from '../utils/utils.js';
import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'bd312182-f682-4611-bb11-842bf508484e',
    'Content-Type': 'application/json'
  }
});

const UserProfile = new UserInfo(UserInfoSelectors.name, UserInfoSelectors.about, UserInfoSelectors.avatar);
let tilesSection = null;

api.getUserInfo()
  .then(data => {
    UserProfile.setUserInfo(data);
    UserProfile.setAvatar(data)
  })

api.getInitialCards()
  .then(data => {
    const initialCards = data
    const tilesSectionData = {
      items: initialCards,
      renderer: tilesRenderer
    };
    tilesSection = new Section(tilesSectionData, cardSelectors.sectionSelector);
    tilesSection.renderSection();
  })

const tilesRenderer = (target) => {
  return(new Card(target, cardSelectors, imagePopup.openPopup.bind(imagePopup), surePopup.openPopup.bind(surePopup), likeCallback, dislikeCallback, UserProfile.getUserId()).returnTile())
}

const tilesCallback = (target) => {
  renderLoading(true, tilesPopup)
  api.addNewCard(target.name, target.link)
    .then(data => {
      tilesSection.addItem(tilesRenderer(data))
    })
    .finally(() => renderLoading(false, tilesPopup))
}

const profileCallback = (target) => {
  renderLoading(true, profilePopup)
  api.setUserInfo(target.name, target.about)
    .then((data) => {
      UserProfile.setUserInfo(data)
    })
  .finally(() => renderLoading(false, profilePopup))
}

const avatarCallback = (target) => {
  api.setUserAvatar(target.avatar)
  .then((data) => {
    UserProfile.setAvatar(data)
  })
}

const sureCallback = (target) => {
  renderLoading(true, surePopup)
  api.deleteCard(target._id)
  .then(() => {
    target._item.remove();
    target._item = null;
  })
  .finally(() => renderLoading(false, surePopup))
}

const likeCallback = (target) => {
  api.likeCard(target._id)
  .then(data => {
    target._like.classList.add(target._selectors.likeActiveSelector);
    target._isLiked = true;
    target._likesCount.textContent =  data.likes.length;
  })
}

const dislikeCallback = (target) => {
  api.dislikeCard(target._id)
  .then(data => {
    target._like.classList.remove(target._selectors.likeActiveSelector);
    target._isLiked = false;
    target._likesCount.textContent =  data.likes.length;
  })
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
    profilePopup.setInputValues(UserProfile.getUserInfo())
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

//https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg