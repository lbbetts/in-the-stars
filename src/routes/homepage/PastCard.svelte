<script>
// @ts-nocheck

    export let fate;
</script>

<div class="card">
    <div class="info"> 
        <h4>QUESTION:</h4> <h5>{fate.question}</h5>
    </div>
    <div class="info"> 
        <h4>CARDS:</h4> <h5>{fate.picked_cards}</h5>
    </div>
    <div class="info"> 
        <h4>RESPONSE:</h4> <h5>{fate.reflection}</h5>
    </div>
</div>

<style>
    .card {
        border: solid #FF4F69 8px;
        background: #120826;
        color: white; 

        margin: 15px;
        padding: 15px;
    }

    h4 {
        color: #FFDA45;
        display: inline-block
    }
    
    h5 {
        display: inline-block;
        overflow: visible
    }
</style>