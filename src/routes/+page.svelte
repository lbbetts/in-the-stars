
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
    :global(.main){
        scrollbar-color: #93CAED #1e1e24;
        scrollbar-width: 0.25rem;
    }
    .fake-body {
        position:fixed;
        padding:0;
        margin:0;

        top:0;
        left:0;

        width: 100%;
        height: 100%;
        background-image: url('../assets/spacey.jpg');
    }

    h1 {
        font-family: sans-serif;
        font-size: 50px;
        text-align: center;
        color: #ff8142
    }
    h2 {
        font-family: cursive;
        font-size: 100px;
        text-align: center;
        color: #ffda45
    }

    .start-button-container {
        background: transparent;
        position: absolute;
        bottom: 150px;
        left: 700px
    }

    .start-button {
        font-family: sans-serif;
        text-align: center;
        font-size: 24px;

        justify-content: center;
        background: #FF4F69;

        border: none;
        border-radius: 4px;

        width: 200%;
    }
</style>