import { supabase } from '../supabaseClient';
import { default as updateStore } from '../store/update-item';

import type {
    IListItem 
} from '../types';

const updateItem = async (item: IListItem) => {
    console.log(item);
    await updateItemInDB(item);
    updateStore(item);
};

const updateItemInDB = async (item: IListItem) => {
    try {
        const user = supabase.auth.user();
        const { data, error } = await supabase
        .from('Todos')
        .update([
            { ...item, user: user.id }
        ])
        .match({ name: item.name })

        if (error && status !== 406) throw error;
    } catch(error) {
        console.error(error);
    }
}

export default updateItem;