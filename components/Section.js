export default class Section {
    constructor({items, renderer}, continerSelector) {
      this._items = items;      
      this._renderer = renderer;
      this._container = document.querySelector(continerSelector);
    }

    addItem(element) {
      this._container.prepend(element)
    }

    renderSection () {
      this._items.forEach(item => {
        this.addItem(this._renderer(item))  
      });
    }
}