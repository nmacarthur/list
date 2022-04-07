<script lang="ts">
  import {user} from "./store/session"
  import {supabase} from "./supabaseClient"
  import Auth from "./components/auth"
  import List from "./components/list"

  user.set(supabase.auth.user())

  supabase.auth.onAuthStateChange((_, session) => {
      user.set(session.user)
  })
</script>

<div class="container">
  {#if $user}
      <List />
  {:else}
      <Auth />
  {/if}
</div>

<style>
  .container {
    display:grid;
  }
</style>