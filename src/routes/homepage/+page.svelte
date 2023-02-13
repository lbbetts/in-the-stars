<script lang="ts">
    import type { PageData } from './$types'
    import { Svroller } from 'svrollbar'
    
    export let data: PageData 
    console.log(data)

    $: ({ fates } = data)

    let numStars = 0

    import PastWindow from './PastWindow.svelte';
    import PastCard from './PastCard.svelte'
    import HelpWindow from './HelpWindow.svelte'
    import Help from './Help.svelte'

    let showPast = false;
    let showPresent = false;
</script>


<body>
    
<div class="homepage-title">
    <h1>YOUR GALAXY</h1>
</div>

{#if numStars !== fates.length}
<h2>NEW STAR AVAILABLE</h2>
{:else}
<h2 style="visibility:hidden">no stars available</h2>
{/if}

<div class="space-container">
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
    <div class="button-container">
        <button class="homepage-button" on:click="{() => showPast = true}">
            PAST
        </button>
        
        {#if showPast}
            <PastWindow on:close="{() => showPast = false}">
                <h2 class="past">PAST FATES</h2>
                {#if fates.length === 0}
                    <p>No fates have been logged.</p>
                {:else}
                    <Svroller width="500px" height="500px">
                        {#each fates as fate}
                            <div class="past-card"><PastCard fate={fate} /></div>
                        {/each}
                    </Svroller>
                {/if}
            </PastWindow>
        {/if}
        <button class="homepage-button" on:click="{() => showPresent = true}">PRESENT</button>

        {#if showPresent}
            <HelpWindow on:close="{() => showPresent = false}">
                <Help />
            </HelpWindow>
        {/if}

        <button class="homepage-button"><a href="/pickcards">FUTURE</a></button>
    </div>
</div>
</body>

<style>
    body {
        background-color: #120826;
    }

    h2 {
        color:aliceblue;
        text-align: center;
    }
    .past {
        color:#120826
    }

    .homepage-title {
        color: #ffda45;
        font-size: 25px;
        text-align: center;
        padding: 10px
    }

    .space-container {
        width: 606px;
        height: 606px;
        padding: 25px;

        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        margin: auto
    }

    .square {
        width: 65px;
        height: 65px;
        border: solid #FF4F69 1px;
    }

    .button-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        width: 700px;
        height: 50px;

        background: transparent;
        bottom: 25px;

        margin: auto;
        justify-content: space-evenly;

        border: solid yellow 1px;

        --svrollbar-thumb-radius: 0rem;
        --svrollbar-thumb-background: #120826;
        --svrollbar-thumb-opacity: 1;
    }

    .homepage-button {
        font-family: sans-serif;
        text-align: center;
        font-size: 24px;

        justify-content: center;
        background: #49e7ec;

        border: none;
        border-radius: 4px;

        width: 75%;
        padding: 10px;
        margin-left: 25px;
        margin-right: 25px;
    }

    .past-card {
        width: 100%;
        border: sold greenyellow 1px;
    }
</style>