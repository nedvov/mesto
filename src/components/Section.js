export default class Section {
    constructor(tilesRenderer, containerSelector) {   
      this._tilesRenderer = tilesRenderer;
      this._container = document.querySelector(containerSelector);
    }

    #renderItem(item) {
      const element = this._tilesRenderer(item);
      this._container.prepend(element)
    }

    renderSection (items) {
      items.forEach(item => {
        this.#renderItem(item);
      });    
    }
}