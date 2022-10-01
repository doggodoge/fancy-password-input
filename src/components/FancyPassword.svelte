<script>
    import ComplexityBar from "./ComplexityBar.svelte";

    export let secret = '';

    export let greenThreshold = 15;
    export let max = 30;
    export let thiccness = 5;
    export let poorMessage = '💩';
    export let goodMessage = '✅';
</script>

<div class="container">
  <input type="password" class="password-input" bind:value={secret}>
  <ComplexityBar {secret} {greenThreshold} {max} {thiccness}/>
  <div class="error-message">
    {#if secret === ''}
    {:else if secret.length > greenThreshold}
      <span style="color: green;">{goodMessage}</span>
    {:else}
      <span style="color: red;">{poorMessage}</span>
    {/if}
  </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    .password-input {
        padding: 0.5rem;
        font-size: x-large;
        border-style: none;
        outline: none;
        transition: 100ms;
    }


    .password-input:focus {
        box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.1);
    }

    .error-message {
        text-align: center;
    }
</style>
