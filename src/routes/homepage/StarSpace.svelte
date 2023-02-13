<script>
    const STARS = ["⋆", "☆", "✣", "✤", "✥",	"✺", "✻"]

    export let hotGas;


</script>

<div>
    <form action="?/updateStar" method="POST">
        <input type="text" id="star_id" name="star_id" value={Number(hotGas.star_id)} />
        <input type="text" id="star_image" name="star_image" value={" "} />
        <button type="submit">{hotGas.star_image}</button>
    </form>
</div>

<style>
    div {
        width: 65px;
        height: 65px;
        border: solid #FF4F69 1px;
        color: orange;
    }

    input {
        visibility: hidden;
        width: 1px;
        height: 1px
    }

    button {
        width: 100%;
        display: block
    }
</style>