export default class Section {
    constructor(tilesRenderer, containerSelector) {   
      this._tilesRenderer = tilesRenderer;
      this._container = document.querySelector(containerSelector);
    }

    prependItem(item) {
      this._container.prepend(item)
    }

    appendItem(item) {
      this._container.append(item)
    }

    renderSection (items) {
      items.forEach(item => {
        this._tilesRenderer(item);
      });    
    }
}