export class Section {
    constructor ({renderer}, containerSelector) {
        
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems({items}) {
      this._items = items;
        this._items.forEach(({name,link})=>this._renderer({name,link}))
      };
    
    addItem(element) {
        this._container.prepend(element)
      };
};