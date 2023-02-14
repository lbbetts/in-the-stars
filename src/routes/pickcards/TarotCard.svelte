<script>
// @ts-nocheck

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const selected = () => {
        dispatch('increment', {amount: 1})
        console.log("hey")
    }

    export let currentCount
    
    let currentState = "unplayed-card";
</script>

{#if currentCount < 3}
<button class={currentState} on:click|once={() => currentState = "played-card"} on:click|once={selected}>
</button>
{:else}<button class={currentState} on:click|once={() => currentState = "played-card"} on:click|once={selected} disabled>
</button>
{/if}

<style>	
.unplayed-card {
    display: inline-block;
    margin: auto;

    width: 75px;
    height: 105px;
    border-radius: 4px;
    border: none;

    background: #FF4F69;
}
.unplayed-card:active {
    background: #FF4F69;
}

.played-card {
    display: inline-block;
    margin: auto;

    width: 75px;
    height: 105px;
    border-radius: 4px;
    border: none;
    
    background: #49e7ec;
}
.played-card:active {
    background: #49e7ec;
}</style>