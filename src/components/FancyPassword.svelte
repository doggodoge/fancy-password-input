<script>
  import ComplexityBar from './ComplexityBar.svelte';

  export let secret = '';
  export let label = '';
  export let greenThreshold = 15;
  export let max = 30;
  export let poorMessage = '💩';
  export let goodMessage = '✅';

  $: notEmpty = secret.length > 0;
</script>

<div class="container" data-testid="fancy-password">
  <div class="input-container">
    {#if label}
      <div id="label" class="label">{label}</div>
    {/if}
    <input
      type="password"
      aria-labelledby="label"
      class="password-input {notEmpty && 'password-input-not-empty'}"
      bind:value={secret} />
  </div>

  <ComplexityBar {secret} {greenThreshold} {max} thiccness={5} />

  <div class="error-message">
    {#if secret === ''}
      <div />
    {:else if secret.length > greenThreshold}
      <span style="color: var(--green);">{goodMessage}</span>
    {:else}
      <span style="color: var(--red);">{poorMessage}</span>
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .label {
    font-size: small;
    color: var(--grey-7);
  }

  .password-input {
    padding: 0.5rem;
    font-size: x-large;
    color: var(--grey-9);
    border-style: none;
    outline: none;
    border-radius: 0.5em;
    transition: 100ms;
    border: var(--border-grey);
  }

  .password-input-not-empty {
    border-radius: 0;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  .password-input:focus {
    border-bottom: var(--border-blue);
  }

  .error-message {
    text-align: center;
    font-size: x-small;
    padding-top: 0.5rem;
  }
</style>
