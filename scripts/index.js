let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let profileCloseButton = document.querySelector('#profile-popup__close-button');
let likes = document.querySelectorAll('.tiles__like');
let formElement = document.querySelector('#profile-popup__form');
let nameInput = document.querySelector('#author-name-popup__input');
let jobInput = document.querySelector('#author-job-popup__input');
let name = document.querySelector('.profile__author-name');
let job = document.querySelector('.profile__author-job');
let profilePopup = document.querySelector('#profile-popup');

function formSubmitHandler (evt) {
	evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    profilePopup.classList.remove('popup_opened');
    window.scrollTo(0, 0);
}

function editProfile () {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    profilePopup.classList.add('popup_opened');
}

function closeProfile () {
    profilePopup.classList.remove('popup_opened');
}

editButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', closeProfile);
formElement.addEventListener('submit', formSubmitHandler);