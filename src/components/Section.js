export default class Section {
    constructor(tilesRenderer, containerSelector) {   
      this._tilesRenderer = tilesRenderer;
      this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
      this._container.prepend(item)
    }

    renderSection (items) {
      items.forEach(item => {
        this._tilesRenderer(item);
      });    
    }
}