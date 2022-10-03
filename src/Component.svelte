<script>
  import { getContext, onDestroy } from 'svelte';
  import FancyPassword from './components/FancyPassword.svelte';

  export let field;
  export let label;
  export let greenThreshold = 15;
  export let max = 30;
  export let poorMessage = '💩';
  export let goodMessage = '✅';

  const { styleable } = getContext('sdk');
  const component = getContext('component');
  const formContext = getContext('form');
  const formStepContext = getContext('form-step');

  let secret;

  const formApi = formContext?.formApi;
  $: formStep = $formStepContext ?? 1;
  $: formField = formApi?.registerField(
    field,
    'text',
    '',
    false,
    null,
    formStep
  );

  let fieldApi;

  $: unsubscribe = formField?.subscribe(value => {
    fieldApi = value?.fieldApi;
  });

  $: fieldApi?.setValue(secret);

  onDestroy(() => {
    fieldApi?.deregister();
    unsubscribe?.();
  });
</script>

<div use:styleable={$component.styles}>
  <FancyPassword
    bind:secret
    {label}
    {greenThreshold}
    {max}
    {poorMessage}
    {goodMessage} />
</div>

<style>
  :root {
    --grey-3: #eeeeee;
    --grey-4: #e0e0e0;
    --grey-7: #757575;

    --red: #e26d69;

    --green: #84c991;

    --border-grey: 1px var(--grey-4) solid;
    --border-blue: 2px var(--blue) solid;
  }
</style>
