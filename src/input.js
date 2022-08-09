import { getById } from './utils.js';
import { addItem, getList, toggleItem } from './list.js';
import valueContainer from './value-container.js';

const [ getNewItemValue, setNewItemValue ] = valueContainer(getById('new-item'));
const listEl = getById('list');

listEl.addEventListener('click', handleListClick);

function prepareListItemDOM(item) {
    const el = document.createElement('div');
    el.setAttribute('class', 'list-item');
    item.complete && el.setAttribute('done', '');
    el.innerText = item.title;
    return el;
}

function updateView() {
    listEl.innerHTML = '';
    const els = getList().map(prepareListItemDOM)
    els.forEach((item) => listEl.appendChild(item));
}
updateView();

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

function handleListClick(e) {
    if (Array.from(e.target.classList).includes('list-item')) {
        const status = e.target.hasAttribute('done');
        status ? e.target.removeAttribute('done') : e.target.setAttribute('done', '');
        console.log(e.target.innerHTML)
        toggleItem(e.target.innerHTML);
    }
}

export {
    getNewItemValue,
    setNewItemValue,
    createNewItem,
};