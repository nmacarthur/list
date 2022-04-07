<script lang="ts">
  import { supabase } from '../../supabaseClient';
  import listStore from '../../store/list';
  import addListItemToDB from '../../actions/add-item-to-db';
  import addItem from '../../store/add-item';
  import updateItem from '../../actions/update-item';

  import ListItem from '../list-item';

  let list;
  let name = '';

  listStore.subscribe(value => list = value);

  const addNewItem = async (name: string) => {
    const item = await addListItemToDB({ name, checked: false})
    addItem(item);
  };

  const nameIsSafe = () => !list.some(item => item.name === name);

  const clearName = () => name = '';

  function handleInput(e) {
    if (e.key === 'Enter' && nameIsSafe()) {
      addNewItem(name);
      clearName();
    }
  }

  async function getList() {
      try {
        const user = supabase.auth.user()
  
        let { data, error, status } = await supabase
          .from('Todos')
          .select(`name, checked, created_at`)
          .eq('user', user.id)
  
        if (error && status !== 406) throw error
  
        if (data) {
          data.sort((a, b) => Number(b.checked) - Number(a.checked))
          data.forEach(item => addItem(item))
        }
      } catch (error) {
        alert(error.message)
      } 
    }

    const updateListItem = ({ detail }) => updateItem(detail);
</script>

<div use:getList class="ui-container">
  <div class="list">
    {#each list as item (item.name)}
      <ListItem name={item.name} checked={item.checked} on:updateItem={updateListItem} />
    {/each}
  </div>
  <div class="input-container">
    <input class="input" bind:value={name} on:keyup={handleInput} placeholder="Type to add an item"  />
  </div>
</div>

<style>

.ui-container {
  display:grid;
  grid-template-rows: 1fr auto;
}

.input-container {
  grid-row: 2;
  border-top: 1px solid var(--secondary-colour);
}

.input {
    padding: 1rem;
    font-size: 0.875rem;
    background-color: transparent;
    width: 100%;
    color: var(--text-colour);
    border: none;
    font-family: var(--font-family);
    opacity: 0.6;
}

.input:focus {
  outline: none;
    opacity: 1;
}

.input::placeholder {
    color: var(--colour--secondary);
}

.btn {
    font-size: 0.75rem;
  background-color: var(--bg-colour);
  padding: 0.5rem;
  border: 1px solid var(--secondary-colour);
  color: var(--secondary-colour);
  font-weight: light;
  border-radius: 6px;
  cursor: pointer;
  transition: 100ms linear background-color, 100ms linear color, 100ms ease-out transform;
  box-shadow: none;
    z-index: 2;
}

.btn:hover {
    background-color: var(--secondary-colour);
    color: var(--bg-colour);
}

.list {
    grid-row: 1;
}

.ui {
    grid-row: 2;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    border-top: 0.25px solid var(--secondary-colour);
}
</style>
