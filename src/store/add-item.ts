import list from './list';

import type {
    IListItem
} from '../types';

const addItem = (item: IListItem) => list.update(current => [...current, item]);

export default addItem;