<script>
    import "@fontsource/press-start-2p"
</script>

<div class="fake-body">
    
<div class="start-menu">

    <h1>IN THE</h1>
    <h2>STARS</h2>

    <div class="start-button-container">
        <button class="start-button"><a href="/homepage">START</a></button>
    </div>
</div>

</div>

<style>
    :global(body) {
        font-family: "Press Start 2P", sans-serif;
    }

    .fake-body {
        position:fixed;
        padding:0;
        margin:0;

        top:0;
        left:0;

        width: 100%;
        height: 100%;
        background-image: url('$lib/assets/default_background.png');

        font-family: "Press Start 2P", sans-serif;
    }

    h1 {
        font-size: 50px;
        text-align: center;
        color: #ff8142;
        text-shadow: 3px 3px white
    }
    h2 {
        font-size: 100px;
        text-align: center;
        color: #ffd21d;
        text-shadow: 5px 5px white
    }

    .start-button-container {
        background: transparent;
        position: absolute;
        left: 40%;
    }

    .start-button {justify-content: center;
        background: #FF4F69;

        border: solid #120826 1px;
        padding: 15px;
    }

    .start-button:active {justify-content: center;
        background: #49e7ec;

        border: solid #120826 1px;
        padding: 15px;
    }

    a {
        font-family: "Press Start 2P", sans-serif;
        text-align: center;
        font-size: 24px;
        color: #120826;
        text-decoration: none;
    }
</style>