<script>
// @ts-nocheck
    import { goto } from '$app/navigation'
    export let hotGas;

    let NEW_STARS = ["S_1.png", "S_2.png", "S_3.png", "S_4.png", "S_5.png", "S_6.png", 
                    "S_7.png", "S_8.png", "S_9.png", "S_10.png", "S_11.png", "S_12.png", 
                    "S_13.png", "S_14.png", "S_15.png", "S_16.png", "S_17.png", "S_18.png", 
                    "S_19.png", "S_20.png", "S_21.png", "S_22.png", "S_23.png", "S_24.png"]

    let randomIndex = () => { return (Math.floor(Math.random() * 24))};

    let randomStar = () => {
        let index = randomIndex()
        return NEW_STARS[index]
    }

    let defineSrc = () => {
        let trail = "src/lib/assets/stars/"
        let src = trail += hotGas.star_image
        return src
    }

    let trail = "src/lib/assets/stars/"
    let src = trail += hotGas.star_image
    console.log(src)

    let goHome = () => {
        goto("./homepage")
    }
</script>

{#if hotGas}
<div>
    <form action="?/updateStar" method="POST" on:submit={goHome()}>
        <input type="text" id="star_id" name="star_id" value={Number(hotGas.star_id)} />
        <input type="text" id="star_image" name="star_image" value={randomStar()} />
        <button type="submit"><img {src} alt="currently unavaible"></button>
    </form>
</div>
{/if}

<style>
    div {
        width: 48px;
        height: 48px;
    }

    input {
        display: none;
        visibility: hidden;
        width: 0px;
        height: 0px
    }

    button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0px;
        background: transparent;
    }
</style>