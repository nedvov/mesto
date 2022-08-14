export default class Popup {
    constructor(popupSelector, selectors) {
      this._popup = document.querySelector(popupSelector);
      this._popupSelectors = selectors;
      this._handleEscClose = this.#handleEscClose.bind(this);
    }

    openPopup() {
        this._popup.classList.add(this._popupSelectors.openSelector);
        document.addEventListener('keydown', this._handleEscClose)
    }

    closePopup() {
        this._popup.classList.remove(this._popupSelectors.openSelector);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    #handleEscClose(evt) {
        if (evt.key == 'Escape') {
            evt.preventDefault();
            this.closePopup();           
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            const withinBoundaries = evt.composedPath().includes(this._popup.children[0]);
            if (evt.target.classList.contains(this._popupSelectors.closeButton) || (!withinBoundaries)) {
                this.closePopup();
            }
        })
    }
}