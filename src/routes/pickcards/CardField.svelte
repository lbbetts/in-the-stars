<script>
    import Card from './TarotCard.svelte'

    export let cardCount = 0

    // @ts-ignore
    let handleSelection = (event) => {
        cardCount += event.detail.amount
        console.log(cardCount)
    }
</script>

<div class="card-container">
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
    <Card on:increment={handleSelection} currentCount = {cardCount}/>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        row-gap: 30px;

        justify-content: space-evenly;
        text-align: center;

        width:575px;
    }
</style>