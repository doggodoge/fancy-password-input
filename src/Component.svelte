<script>
    import {getContext, onDestroy} from "svelte"
    import FancyPassword from "./components/FancyPassword.svelte";

    let secret;

    export let field;

    export let thiccness;
    export let greenThreshold;
    export let max;
    export let poorMessage = '💩';
    export let goodMessage = '✅';
    
    const {styleable} = getContext("sdk")
    const component = getContext("component")
    const formContext = getContext("form");
    const formStepContext = getContext("form-step");

    const formApi = formContext?.formApi;
    $: formStep = formStepContext ? $formStepContext ?? 1 : 1;
    $: formField = formApi?.registerField(field, "text", "", false, null, formStep);

    let fieldApi;
    let fieldState;

    $: unsubscribe = formField?.subscribe((value) => {
        fieldState = value?.fieldState;
        fieldApi = value?.fieldApi;
    });

    onDestroy(() => {
        fieldApi?.deregister();
        unsubscribe?.();
    });

    $: {
        fieldApi?.setValue(secret);
    }
</script>

<div use:styleable={$component.styles}>
  <FancyPassword
      bind:secret={secret}
      {thiccness}
      {greenThreshold}
      {max}
      {poorMessage}
      {goodMessage}
  />
</div>
