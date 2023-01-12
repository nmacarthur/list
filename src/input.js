import { getById } from './utils.js';
import { addItem, getList, toggleItem, removeItem, moveItem, getItem, getItemIndex } from './list.js';
import valueContainer from './value-container.js';

const [ getNewItemValue, setNewItemValue ] = valueContainer(getById('new-item'));
const listEl = getById('list');

listEl.addEventListener('click', handleListClick);

function prepareListItemDOM({ title, complete }) {
    const el = document.createElement('div');
    const innerSpan = document.createElement('span');
    el.setAttribute('class', 'list-item')
    el.setAttribute('id', title);
    el.setAttribute('draggable', true);
    complete && el.setAttribute('done', '');
    innerSpan.innerText = title;
    innerSpan.setAttribute('title', title);
    el.appendChild(innerSpan);
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

function handleListClick({ target }) {
    if (Array.from(target.classList).includes('list-item')) {
        const status = target.hasAttribute('done');
        status ? target.removeAttribute('done') : target.setAttribute('done', '');
        toggleItem(target.getAttribute('id'));
    }

    if (Array.from(target.classList).includes('list-item__delete')) {
        removeItem(target.parentElement.getAttribute('id'));
        updateView();
    }
}

function deleteButton() {
    const el = document.createElement('button');
    el.setAttribute('class', 'list-item__delete');
    el.innerText = 'x'
    return el;
}

function handleItemDrag({ target, clientY }) {
    const { id } = target;
    if (!id) {
        return;
    }

    const a = Array.from(document.querySelectorAll('.list-item')).map(element => {
        const { height, y } = element.getBoundingClientRect(); 
        return height + y
    });

    const newIndex = a.reduce((prev, current, index) => current < clientY ? index : prev, 0)
    const item = getItem(id);
    moveItem(item, newIndex);
    updateView();
}

export {
    getNewItemValue,
    setNewItemValue,
    createNewItem,
    handleItemDrag
};