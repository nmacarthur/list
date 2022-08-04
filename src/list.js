let list = [];

const getList = () => [...list];
const addItem = async (item) => list = [...list, item];
const removeItem = ({ id }) => list.filter(item => item.id !== id);
const getItem = (id)  => list.find(item => item.id === id);
const getItemIndex = (id) => list.findIndex(item => item.id === id);
const toggleItem = ({ id }) => {
    const item = getItem(id);
    const index = getItemIndex(id);
    const updatedItem = { ...item, complete: !item.complete }

    return list.splice(index, 1, updatedItem);
}

export {
    addItem,
    removeItem,
    getItem,
    toggleItem,
    getList,
};