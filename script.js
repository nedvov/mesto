let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let profileCloseButton = document.querySelector('#profile-popup__close-button');
let likes = document.querySelectorAll('.tiles__like');
let formElement = document.querySelector('#profile-popup__container');
let nameInput = document.querySelector('#author-name-popup__input');
let jobInput = document.querySelector('#author-job-popup__input');
let name = document.querySelector('.profile__author-name');
let job = document.querySelector('.profile__author-job');
let profilePopup = document.querySelector('#profile-popup');

nameInput.value = name.textContent;
jobInput.value = job.textContent;

function formSubmitHandler (evt) {
	evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    profilePopup.classList.remove('popup_opened');
    window.scrollTo(0, 0);
}

editButton.addEventListener('click', function() {document.querySelector('#profile-popup').classList.add('popup_opened')});

profileCloseButton.addEventListener('click', function() {
    profilePopup.classList.remove('popup_opened')
    nameInput.value = name.textContent
    jobInput.value = job.textContent
});

likes.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('tiles__like_active')
    })
});

formElement.addEventListener('submit', formSubmitHandler);