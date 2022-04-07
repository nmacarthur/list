<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function toggleChecked() {
        dispatch('updateItem', { name, checked: !checked });
    }
    export let name;
    export let checked;
</script>

<div class="list-item" checked={checked} on:click={toggleChecked}>{name}</div>

<style>
.list-item {
    padding: 2rem;
    color: var(--text-colour);
    border-bottom: 0.25px solid var(--secondary-colour);
}

.list-item[checked="true"] {
    text-decoration: line-through;
}

</style>