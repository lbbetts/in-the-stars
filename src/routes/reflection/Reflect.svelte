<script>
// @ts-nocheck

    import { currentQuestion } from '../stores.js'

    export let hand = [];
    let relevantData = "";

    let handleClick = () => {
        console.log("default was prevented")
    }

    for (let card in hand) {
        relevantData += (hand[card]["Card_name"]) + " "
    }

    console.log(relevantData)
</script>

<div class="reflection-container">
    <h1>RELFECTION</h1>
    <h2>FOCUS</h2>
    <h3>{$currentQuestion}</h3>
    <form action="?/createFate" method="POST">
        <input class="invisible" type="text" id="question" name="question" value={$currentQuestion}>
        <input class="invisible" type="text" id="picked_cards" name="picked_cards" value={relevantData}>
        <label for="title">REFLECT</label>
        <textarea id="reflection" name="reflection" rows={5}></textarea>
        <button type="submit">Finished</button>
    </form>
</div>

<style>
    .invisible {
        visibility: hidden;
        width: 0px;
        height: 0px
    }

    .reflection-container {
        background-color: #FF4F69;
        width: 350px;

        text-align: center;
        color: black
    }

    input {
        height: 125px
    }
</style>