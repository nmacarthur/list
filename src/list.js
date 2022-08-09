const getList = () => JSON.parse(localStorage.getItem('list')) || [];
const setList = list => localStorage.setItem('list', JSON.stringify(list))
const addItem = async (item) => setList([...getList(), item]);
const removeItem = (id) => setList(getList().filter(item => item.title !== id));
const getItem = (id)  => getList().find(item => item.title === id);
const getItemIndex = (id) => getList().findIndex(item => item.title === id);
const toggleItem = (id) => {
    const item = getItem(id);
    const index = getItemIndex(id);
    const updatedItem = { ...item, complete: !item.complete }

    let newArray = [...getList()];
    newArray.splice(index, 1, updatedItem)

    setList(newArray);
}

export {
    addItem,
    removeItem,
    getItem,
    toggleItem,
    getList,
};