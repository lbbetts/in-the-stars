<script>
// @ts-nocheck
    import PulledCard from './PulledCard.svelte'

    export let hand = [];
    export const PHASES = ["PAST", "PRESENT", "FUTURE"]

    let index = 0

    let increaseIndex = () => {
        index += 1
    }
    let decreaseIndex = () => {
        index -= 1
    }

    $: currentCard = hand[index]
</script>

<div class="insight-container">
    <div class="left-button">
        {#if index !== 0}
            <button class="directional-button" on:click={decreaseIndex}>←</button>
        {:else}
            <button class="inactive-button">←</button>
        {/if}
    </div>
    <div class="info-container">
        <div class="card-phase">
            <PulledCard givenCard = {hand[index]} phase = {PHASES[index]}/>
        </div>
        <div class="insight">
            <h1>INSIGHTS</h1>
            <h5>
                {#if currentCard["Reversed"] === true}
                <p>REVERSED</p>
                {:else}
                <p>UPRIGHT</p>
                {/if}
            </h5>
            <h3>
                KEY WORDS
            </h3>
            <h4>
                {#if currentCard["Reversed"] === true}
                    {currentCard["Keywords_reversed"]}
                {:else}
                    {currentCard["Keywords_upright"]}
                {/if}
            </h4>
            <h3>
                DESCRIPTION
            </h3>
            <h4>
                {#if currentCard["Reversed"] === true}
                    {currentCard["Description_reversed"]}
                {:else}
                    {currentCard["Description_upright"]}
                {/if}
            </h4>
        </div>
    </div>
    <div class="right-button">
        {#if index !== 2}
            <button class="directional-button" on:click={increaseIndex}>→</button>
        {:else}
            <button class="inactive-button">→</button>
        {/if}
    </div>
</div>

<style>
    .insight-container {
        display: flex;
        flex-direction: row;
        justify-content: center;

        background: #120826;
        width: 600px;

        text-align: center;
        font-family: "Press Start 2P", sans-serif;
    }

    .card-phase {
        margin-right: 15px;
    }
    .info-container {
        display: flex;
    }
    .directional-button {
        margin: 15px;

        align-items: center;
        align-items: stretch;
        justify-content: center;

        background: none;
        border: none;
        color: #49e7ec;
        font-size: 20px
    }

    .insight {
        width: 250px;
        font-family: "Press Start 2P", sans-serif;
    }

    .inactive-button {
        margin: 15px;

        align-items: center;
        align-items: stretch;
        justify-content: center;

        background: none;
        border: none;
        color: #120826
    }

    h1 {
        color: #ffda45;
        font-size: 25px;
    }

    h3 {
        color: #ffda45;
        font-size: 15px;
    }

    h4 {
        color: #FFF7F8;
    }

    h5 {
        color: #FFF7F8;
    }
</style>