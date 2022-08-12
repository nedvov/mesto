import {popupSelectors, formSelectors, cardSelectors, UserInfoSelectors, tilesFormElement, profileFormElement, initialCards, profileEditButton, tilesAddButton} from "../utils/constants.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {getImageError} from '../utils/utils.js';
import './index.css';

const tilesRenderer = (target) => {
  return(new Card(target, cardSelectors, imagePopup.openPopup.bind(imagePopup)).returnTile())
}

const tilesCallback = (target) => {
  tilesSection.addItem(tilesRenderer(target._getInputValues()));
}

const profileCallback = (target) => {
  UserProfile.setUserInfo(target._getInputValues())
}

const tilesSectionData = {
  items: initialCards,
  renderer: tilesRenderer
};

const tilesSection = new Section(tilesSectionData, cardSelectors.sectionSelector);
const UserProfile = new UserInfo(UserInfoSelectors.name, UserInfoSelectors.job);

const tilesPopup = new PopupWithForm(popupSelectors.tilesPopup, popupSelectors, formSelectors, tilesCallback);
const profilePopup = new PopupWithForm(popupSelectors.profilePopup, popupSelectors, formSelectors, profileCallback);
const imagePopup = new PopupWithImage(popupSelectors.imagePopup, popupSelectors);

const tilesFormValidator = new FormValidator(formSelectors, tilesFormElement);
const profileFormValidator = new FormValidator(formSelectors, profileFormElement);

tilesPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();

profileFormValidator.enableValidation();
tilesFormValidator.enableValidation();

tilesSection.renderSection();

profileEditButton.addEventListener('click', () => {
    profilePopup.setInputValues(UserProfile.getUserInfo().name, UserProfile.getUserInfo().job)
    profileFormValidator.clearForm();
    profileFormValidator.checkSubmitButtonState();
    profilePopup.openPopup();
});

tilesAddButton.addEventListener('click', () => {
    tilesFormValidator.clearForm();
    tilesFormValidator.checkSubmitButtonState();
    tilesPopup.openPopup();    
});

window.getImageError = getImageError;