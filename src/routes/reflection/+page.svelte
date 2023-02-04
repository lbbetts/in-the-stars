<script>

let pickedCards;
let cards;

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
</script>

<p>HI I'M STILL UNDER CONSTRUCTION !</p>

<style>
	:global(body) {
        background-color: rgb(73, 231, 236)
    }
</style>