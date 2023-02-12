<script lang="ts">
    import type { PageData } from './$types'
    
    export let data: PageData 

    $: ({ fates } = data)
</script>


<body>
    
<div class="homepage-title">
    <h1>YOUR GALAXY</h1>
</div>

<!-- {#if currentStars !== numReflections}
<h2>NEW STAR AVAILABLE</h2>
{/if} -->

<h2>CURRENT FATES</h2>
{#each fates as fate}
    <h2>{fate.question}</h2>
    <h2>{fate.picked_cards}</h2>
    <h2>{fate.reflection}</h2>
{/each}

<div class="grid">
    <div class="square" id="1">
        <p id="field-1"></p>
    </div>
    <div class="square" id="2">
        <p id="field-2"></p>
    </div>
    <div class="square" id="3">
        <p id="field-3"></p>
    </div>
    <div class="square" id="4">
        <p id="field-4"></p>
    </div>
    <div class="square" id="5">
        <p id="field-5"></p>
    </div>
    <div class="square" id="6">
        <p id="field-6"></p>
    </div>
    <div class="square" id="7">
        <p id="field-7"></p>
    </div>
    <div class="square" id="8">
        <p id="field-8"></p>
    </div>
    <div class="square" id="9">
        <p id="field-9"></p>
    </div>
</div>

<div>
    <div class="button-containers">
        <button class="pick-button"><a href="/pickcards">YOUR FATE</a></button>
        <!-- <button class="pick-button" on:click={quitProgram} >QUIT</button> -->
    </div>
</div>
</body>

<style>
    body {
        background-color: #120826;
    }

    .homepage-title {
        color: #ffda45;
        font-size: 25px;
        text-align: center;
        padding: 10px
    }

    .grid {
        width: 606px;
        height: 606px;
        padding: 25px;

        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        margin: auto
    }

    .square {
        width: 200px;
        height: 200px;
        border: solid #FF4F69 1px;
    }

    .button-containers {
        width: 100px;

        background: transparent;
        bottom: 25px;
        left: 700px;

        margin: auto
    }

    .pick-button {
        font-family: sans-serif;
        text-align: center;
        font-size: 24px;

        justify-content: center;
        background: #49e7ec;

        border: none;
        border-radius: 4px;

        width: 200%;
        padding: 10px
    }
</style>