<script>
    import {getContext} from "svelte"
    import FancyPassword from "./components/FancyPassword.svelte";

    export let thiccness;
    export let greenThreshold;
    export let max;
    export let poorMessage = '💩';
    export let goodMessage = '✅';

    const {styleable} = getContext("sdk")
    const component = getContext("component")
</script>

<div use:styleable={$component.styles}>
  <FancyPassword {thiccness} {greenThreshold} {max} {poorMessage} {goodMessage} />
</div>
