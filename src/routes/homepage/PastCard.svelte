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

        width: 400px;
        height: 130px;
        line-height: 2px;

        margin: 15px;
        padding: 15px;
    }

    h4 {
        color: #FFDA45;
        display: inline-block;
        font-size: 10px;
    }
    
    h5 {
        display: inline-block;
        overflow: visible;
        font-size: 10px
    }
</style>