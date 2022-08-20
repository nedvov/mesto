import {popupSelectors, formSelectors, cardSelectors, UserInfoSelectors, tilesFormElement, profileFormElement, avatarFormElement, initialCards, profileEditButton, tilesAddButton, avatarEditButton} from "../utils/constants.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithOneButton from '../components/PopupWithOneButton.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {getImageError} from '../utils/utils.js';
const avatarImage = new URL('../images/profile__avatar.jpg', import.meta.url)
import './index.css';

const tilesRenderer = (target) => {
  return(new Card(target, cardSelectors, imagePopup.openPopup.bind(imagePopup), surePopup.openPopup.bind(surePopup)).returnTile())
}

const tilesCallback = (target) => {
  tilesSection.addItem(tilesRenderer(target));
}

const profileCallback = (target) => {
  UserProfile.setUserInfo(target)
}

const avatarCallback = (target) => {
  UserProfile.setAvatar(target)
}

const sureCallback = (target) => {
  target.remove();
  target = null;
}

const tilesSectionData = {
  items: initialCards,
  renderer: tilesRenderer
};

const tilesSection = new Section(tilesSectionData, cardSelectors.sectionSelector);
const UserProfile = new UserInfo(UserInfoSelectors.name, UserInfoSelectors.job, UserInfoSelectors.avatar);

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

tilesSection.renderSection();

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

UserProfile.setAvatar({link: avatarImage});