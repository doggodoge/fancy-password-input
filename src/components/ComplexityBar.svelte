<script>
  import clamp from './utils/clamp';

  export let secret = '';
  export let greenThreshold = 15;
  export let max = 30;
  export let thiccness = 5;
  let color;
  let width;

  $: {
    color = 'var(--red)';
    if (secret.length > greenThreshold) {
      color = 'var(--green)';
    }
    width = `${(clamp(secret.length, 0, max) / max) * 100}%`;
  }
</script>

<div
  class="container"
  style="background-color: {color}; height: {thiccness}px; width: {width};" />

<style>
  .container {
    transition: 100ms;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }
</style>
