<script>
	$: anClass1 = "unplayed-card";
	$: anClass2 = "unplayed-card";
	$: anClass3 = "unplayed-card";
	$: anClass4 = "unplayed-card";
	$: anClass5 = "unplayed-card";
	$: anClass6 = "unplayed-card";
	
	let cards= ['fool','moon','world','sun','hermit'];
	let pickedCards = []
	
	function pullCard(cards) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * cards.length);

    // get random item
    const card = cards[randomIndex];

    return card;
	}
	
	function pickCard() {
		if (pickedCards.length === 3){
			
		} else {
			let newCard = pullCard(cards);
			while (pickedCards.includes(newCard)) {
				newCard = pullCard(cards)
			}
			pickedCards.push(newCard)
			console.log(pickedCards)
		}
	}

	let currentlySelected = 0;
	
	function toggleCard1() {
		if (currentlySelected < 3) {
			anClass1 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
	function toggleCard2() {
		if (currentlySelected < 3) {
			anClass2 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
	function toggleCard3() {
		if (currentlySelected < 3) {
			anClass3 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
	function toggleCard4() {
		if (currentlySelected < 3) {
			anClass4 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
	function toggleCard5() {
		if (currentlySelected < 3) {
			anClass5 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
	function toggleCard6() {
		if (currentlySelected < 3) {
			anClass6 = "played-card"
			currentlySelected += 1
		}
		console.log(anClass1)
		console.log(currentlySelected)
	}
	
</script>

<h1>CHOOSE YOUR DESTINY</h1>
<h2>
	PICK 3 CARDS
</h2>
<div class="grid-container-cards">
	<button class={anClass1} id="card-one" on:click|once={pickCard} on:click|once={() => toggleCard1()}>
	</button>
	<button class={anClass2} id="card-two" on:click|once={pickCard} on:click|once = {() => toggleCard2()}>
	</button>
	<button class={anClass3} id="card-three" on:click|once={pickCard} on:click|once = {() => toggleCard3()}>
	</button>
	<button class={anClass4} id="card-four" on:click={pickCard} on:click|once = {() => toggleCard4()}>
	</button>
	<button class={anClass5} id="card-five" on:click={pickCard} on:click|once = {() => toggleCard5()}>
	</button>
	<button class={anClass6} id="card-six" on:click={pickCard} on:click|once = {() => toggleCard6()}>
	</button>
</div>

<style>
	:global(body) {
        background-color: #120826;
    }
	h1 {
		text-align: center;
		color: #fff7f8;
		text-shadow: 3px 3px #ff8142;
	}
	h2{
		text-align: center;
		margin-top: 25px;
		margin-bottom: 25px;
		color: #ffda45;
	}
	.grid-container-cards {
	    display: flex;
    	grid-template-columns: 1fr 1fr 1fr;
		flex-wrap: wrap;
    	justify-content: center;
		gap: 5em;

    row-gap: 50px;
	}
	.unplayed-card {
		width: 150px;
    height: 210px;
    border-radius: 10px;
		border: none;

    background: #FF4F69;
	}
	.unplayed-card:active {
		background: #FF4F69;
	}
	
	.played-card {
		width: 150px;
    height: 210px;
    border-radius: 10px;
		border: none;
		
		background: #49e7ec;
	}
	.played-card:active {
		background: #49e7ec;
	}
</style>
