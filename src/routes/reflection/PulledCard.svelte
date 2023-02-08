<script>
    import MAJOR_ARCANA from '$lib/TarotCard.js'

    export let usedCards

    let trail = "./src/assets/cards/"
    let pulledCard = [];

    function validateUnique() {
        let randomIndex = Math.floor(Math.random() * 22);
        pulledCard = MAJOR_ARCANA[randomIndex];

        if (usedCards.includes(pulledCard)) {
            console.log("hi", pulledCard)
            validateUnique()
        } else {
            console.log("hola", pulledCard)
            usedCards.push(pulledCard)
        }
    }

    let src = trail += pulledCard["Image"]

    console.log(pulledCard)
    console.log(src)
</script>

{#if pulledCard.length !== 0}
<img {src} alt="Currently unavailable ... wait ...">
{/if}