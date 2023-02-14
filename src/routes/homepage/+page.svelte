<script lang="ts">
    import type { PageData } from './$types'
    import { Svroller } from 'svrollbar'
    
    export let data: PageData 
    console.log(data)

    $: ({ fates } = data)
    $: ({ stars } = data)

    let numStars = 0
    let increaseStars = () => {
        console.log("stars increased")
        numStars += 1
    }

    import PastWindow from './PastWindow.svelte';
    import PastCard from './PastCard.svelte'
    import HelpWindow from './HelpWindow.svelte'
    import Help from './Help.svelte'
    import StarSpace from './StarSpace.svelte'

    let showPast = false;
    let showPresent = false;
</script>


<body>
    
<div class="homepage-title">
    <h1>YOUR GALAXY</h1>
    {#if numStars !== fates.length}
        <h2>NEW STAR AVAILABLE</h2>
    {:else}
        <h2 style="visibility:hidden">no stars available</h2>
    {/if}
</div>

<div class="space-container">
    {#each stars as hotGas}
        {#if hotGas.star_image != "empty_space.png"}
        <div class='hide-star-counter'>
            {increaseStars()}
        </div>
        {/if}
        <StarSpace hotGas={hotGas} />
    {/each}
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
                        <Svroller width="500px" height="200px">
                            {#each fates as fate}
                                <PastCard fate={fate} />
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
        position:fixed;
        padding:0;
        margin:0;

        top:0;
        left:0;

        width: 100%;
        height: 100%;
        background-image: url('$lib/assets/default_background.png');
    }

    h2 {
        color: #FFF7F8;
        text-align: center;
        font-size: 14px;
        padding: 2px;
    }
    .past {
        color:#120826
    }

    .homepage-title {
        color: #ffda45;
        font-size: 16px;
        text-align: center;
        padding: 25px
    }

    .space-container {
        width: 580px;
        height: 350px;

        border: solid #49e7ec 2px;
        background-color: rgb(18, 8, 38, .90);

        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        margin: auto;

    }

    .button-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        width: 400px;
        height: 50px;

        background: transparent;
        bottom: 25px;

        margin: auto;
        justify-content: space-evenly;
        padding: 10px;

        --svrollbar-thumb-radius: 0rem;
        --svrollbar-thumb-background: #120826;
        --svrollbar-thumb-opacity: 1;
    }

    .homepage-button {
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        font-size: 14px;

        justify-content: center;
        background: #FF4F69;

        border: none;

        width: 120px;
        height: 30px;
        padding: 1px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .past-card {
        width: 50%;
    }

    .hide-star-counter {
        display: none;
        visibility: hidden;
        width: 0px;
        height: 0px;
    }

    a {
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        font-size: 14px;
        color: #120826;
        text-decoration: none;
    }
</style>