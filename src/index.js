import { createNewItem, handleItemDrag } from './input.js';
import { getById } from './utils.js';

const setup = () => {
    const addButton = getById('btn--add');
    addButton.addEventListener('click', createNewItem);

    const list = getById('list');
    list.addEventListener('dragend', handleItemDrag)
}

setup();
