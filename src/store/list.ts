import { writable } from 'svelte/store';

import type {
    IListItem
} from '../types';

const list = writable([] as IListItem[]);

export default list;