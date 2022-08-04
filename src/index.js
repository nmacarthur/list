import { createNewItem } from './input.js';
import { getById } from './utils.js';

const setup = () => {
    const addButton = getById('btn--add');
    addButton.addEventListener('click', createNewItem);
}

setup();
