export class Section {
    constructor ({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._items.forEach(({name,link})=>this._renderer({name,link}))
      };
    
    addItem(element) {
        this._container.prepend(element)
      };
};