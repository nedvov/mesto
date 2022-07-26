export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', closeByEscape)
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(evt) {
    if (evt.key == 'Escape') {
        evt.preventDefault();
        const openPopup = document.querySelector('.popup_opened');
        closePopup(openPopup);
    }
}