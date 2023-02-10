<script>
// @ts-nocheck

    export let hand = [];

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
        <h1>INSIGHTS</h1>
        <h2>
            {currentCard["Card_name"]}
        </h2>
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

        background: #FF4F69;
        width: 350px;

        text-align: center
    }
    .directional-button {
        margin: 15px;

        align-items: center;
        align-items: stretch;
        justify-content: center;
    }

    .inactive-button {
        margin: 15px;

        align-items: center;
        align-items: stretch;
        justify-content: center;

        background: none;
        border: none;
        color: #FF4F69
    }
</style>