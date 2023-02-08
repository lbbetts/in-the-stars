<script>
    import MAJOR_ARCANA from '$lib/TarotCard.js'
    import Hand from './Hand.svelte'

    console.log("hi")

    export let pickedCards = [];

    function pullCard() {
        const randomIndex = Math.floor(Math.random() * 22);
        const card = MAJOR_ARCANA[randomIndex];

        return card;
    }

    function pickCard() {
        console.log("An attempt was made")
        while (pickedCards.length < 3){
            let newCard = pullCard();
            while (pickedCards.includes(newCard)) {
                newCard = pullCard()
            }
            pickedCards.push(newCard)
            console.log(pickedCards)
        }
    }

    pickCard()

</script>

<h1>HI I'M STILL UNDER CONSTRUCTION !</h1>

{#if pickedCards.length === 3}
<Hand hand={pickedCards}/>
{/if}
<p><a href="/homepage">BACK TO HOMEPAGE</a></p>

<style>
	:global(body) {
        background-color: rgb(73, 231, 236)
    }

    h1 {
        text-align: center
    }
</style>