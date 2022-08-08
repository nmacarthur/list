import { getById } from './utils.js';
import { addItem, getList } from './list.js';
import valueContainer from './value-container.js';

const [ getNewItemValue, setNewItemValue ] = valueContainer(getById('new-item'));
const listEl = getById('list');

function prepareListItemDOM(item) {
    const el = document.createElement('lil-layer');
    const elDiv = document.createElement('div');
    el.setAttribute('colour', 'lightSkyBlue')
    el.setAttribute('complete', true);
    elDiv.setAttribute('class', 'list-item');
    elDiv.innerText = item.title;
    el.appendChild(elDiv);
    return el;
}

function updateView() {
    listEl.innerHTML = '';
    const els = getList().map(prepareListItemDOM)
    els.forEach((item) => listEl.appendChild(item));
}

async function createNewItem() {
    const content = getNewItemValue().trim();

    if (content === '') {
        return;
    }

    await addItem({
        title: content,
        complete: false,
    })

    setNewItemValue('');

    updateView();
}

export {
    getNewItemValue,
    setNewItemValue,
    createNewItem,
};