import { getById } from './utils.js';
import { addItem, getList, toggleItem, removeItem } from './list.js';
import valueContainer from './value-container.js';

const [ getNewItemValue, setNewItemValue ] = valueContainer(getById('new-item'));
const listEl = getById('list');

listEl.addEventListener('click', handleListClick);


function prepareListItemDOM(item) {
    const el = document.createElement('div');
    el.setAttribute('class', 'list-item')
    el.setAttribute('id', item.title);
    item.complete && el.setAttribute('done', '');
    el.innerText = item.title;
    const button = deleteButton();
    el.appendChild(button);
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
        toggleItem(e.target.getAttribute('id'));
    }

    if (Array.from(e.target.classList).includes('list-item__delete')) {
        removeItem(e.target.parentElement.getAttribute('id'));
        updateView();
    }
}

function deleteButton() {
    const el = document.createElement('button');
    el.setAttribute('class', 'list-item__delete');
    el.innerText = 'x'
    return el;
}
export {
    getNewItemValue,
    setNewItemValue,
    createNewItem,
};