<script>
// @ts-nocheck

    export let givenCard = [];
    export let phase = "";

    let trail = "src/lib/assets/cards/"

    let src = trail += givenCard["Image"]
    console.log(src)
</script>


<div class="phase-container">
    <h2>{phase}</h2>
    <h3>{givenCard["Card_name"]}</h3>
    {#if givenCard["Reversed"] === true}
    <img {src} class="reversed" alt="Currently unavailable">
    {:else}
    <img {src} alt="Currently unavailable">
    {/if}
</div>

<style>
    h2 {
        color: #ffda45
    }
    h3 {
        color: #ff8142;
    }

    .reversed {
        transform: rotate(180deg);
    }
</style>