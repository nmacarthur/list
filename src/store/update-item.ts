import list from './list';

import type {
    IListItem
} from '../types';

const updateItem = (item: IListItem) => list.update(current => {
    const index = current.findIndex(({ name }) => name == item.name);
    const newList = current.slice();
    newList[index] = item;
    return newList;
})

export default updateItem;