import { supabase } from '../supabaseClient';

import type {
    IListItem
} from '../types';

const addListItemToDB = async (item: IListItem) => {
    try {
        const user = supabase.auth.user();

        const { data, error } = await supabase
        .from('Todos')
        .insert([
            { ...item, user: user.id }
        ])

        if (error && status !== 406) throw error;

        if(data) {
            const [ item ] = data;
            const { name, checked } = item;
            return {
                name, 
                checked
            }
        }
    } catch(error) {
        console.error(error);
    }
}

export default addListItemToDB;