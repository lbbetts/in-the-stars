<script>
// @ts-nocheck

    import { currentQuestion } from '../stores.js'
    import { goto } from '$app/navigation';

    export let hand = [];
    let relevantData = "";

    let handleClick = () => {
        console.log("default was prevented")
    }

    for (let card in hand) {
        relevantData += (hand[card]["Card_name"]) + " "
    }

    let goHome = () => {
        goto("./homepage")
    }

    console.log(relevantData)
</script>

<div class="reflection-container">
    <div class="focus-question">
        <h2>FOCUS</h2>
    <h3>{$currentQuestion}</h3>
    </div>
    <div class="fate-form">
        <form action="?/createFate" method="POST">
            <input class="invisible" type="text" id="question" name="question" value={$currentQuestion}>
            <input class="invisible" type="text" id="picked_cards" name="picked_cards" value={relevantData}>
            <label for="title">REFLECT</label>
            <textarea id="reflection" name="reflection" rows={4} placeholder="I think that..."></textarea>
            <button type="submit">FINISHED</button>
        </form>
        <button on:click={goHome}>GO BACK</button>
    </div>
</div>

<style>
    .invisible {
        visibility: hidden;
        display: none;
        width: 0px;
        height: 0px
    }

    label {
        visibility: hidden;
    }

    .reflection-container {
        background-color: #FF4F69;
        width: 600px;
        height: 110px;

        display: flex;
        flex-direction: row;
        justify-content: center;

        text-align: center;
        color: black
    }

    textarea {
        width: 200px;
        resize: none;
        outline: none;

        border: solid #49e7ec 4px;
        background: #120826;
        color: #FFF7F8;
        font-family: "Press Start 2P", sans-serif;
    }

    button {
        background: #49e7ec;
        color: #120826;

        border: none;
    }

    a {
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        background: #49e7ec;
        color: #120826;
        text-decoration: none;
    }
</style>