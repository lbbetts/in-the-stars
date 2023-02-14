<script>
// @ts-nocheck

    import MAJOR_ARCANA from '$lib/TarotCard.js'
    import Hand from './Hand.svelte'
    import Insight from './Insight.svelte'
    import Reflect from './Reflect.svelte'

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

<body>
    <h1>TRUST YOUR INTUITION</h1>

    {#if pickedCards.length === 3}
    <div class="hand-container-container">
        <!-- <Hand bind:hand={pickedCards}/> -->
        <Insight bind:hand={pickedCards}/>
    </div>

    <div class="insight-and-reflect">
        <Reflect bind:hand={pickedCards}/>
    </div>
    {/if}
</body>

<style>
	body {
        font-family: 'Press Start 2P', sans-serif;
		position:fixed;
        padding:0;
        margin:0;

        top:0;
        left:0;

        width: 100%;
        height: 100%;
        background-image: url('$lib/assets/reflection_bg.png');
    }

    .hand-container-container {
		margin: auto;
		justify-content: space-evenly;

        width: 575px;
        padding: 15px;
    }

    .insight-and-reflect {
        margin: auto;
		justify-content: space-evenly;

        width: 575px;
        padding: 15px;
    }

	h1 {
		text-align: center;
		color: black;
		text-shadow: 3px 3px #FF4F69;
        font-family: "Press Start 2P";
        font-weight: bold;
	}
</style>