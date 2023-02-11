<script>
// @ts-nocheck

    import MAJOR_ARCANA from '$lib/TarotCard.js'
    import Hand from './Hand.svelte'
    import Insight from './Insight.svelte'
    import Reflect from './Reflect.svelte'
    export const prerender = false
    console.log("hi")

    export let pickedCards = [];

    function pullCard() {
        let randomIndex = Math.floor(Math.random() * 22);
        let card = MAJOR_ARCANA[randomIndex];

        return card;
    }

    function isReversed() {
        let randomPotential = Math.floor(Math.random() * 10);
        if (randomPotential === 1) {
            return true
        }
        return false
    }

    function pickCard() {
        while (pickedCards.length < 3){
            let newCard = pullCard();
            while (pickedCards.includes(newCard)) {
                newCard = pullCard()
            }
            if (isReversed() === true) {
                newCard["Reversed"] = true
            }
            pickedCards.push(newCard)
            console.log(pickedCards)
        }
    }

    pickCard()

</script>

<h1>TRUST YOUR INTUITION</h1>

{#if pickedCards.length === 3}
<div class="hand-container-container">
    <Hand bind:hand={pickedCards}/>
</div>

<div class="insight-and-reflect">
    <Insight bind:hand={pickedCards}/>
    <Reflect bind:hand={pickedCards}/>
</div>
{/if}
<p><a href="/homepage">BACK TO HOMEPAGE</a></p>

<style>
	:global(body) {
        background-color: rgb(73, 231, 236)
    }

    .hand-container-container {
		margin: auto;
		justify-content: space-evenly;

        width: 575px;
        padding: 15px;
    }

    .insight-and-reflect {
        margin: auto;
        justify-content: center;
        justify-content: space-evenly;
        display: grid;
        grid-template-columns: 1fr 1fr;

        padding: 15px
    }

	h1 {
		text-align: center;
		color: black;
		text-shadow: 3px 3px #FF4F69;
	}
</style>