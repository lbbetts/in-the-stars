<script>
    import PulledCard from './PulledCard.svelte'

    export let hand = []

</script>

{#if hand.length === 0 }
<PulledCard usedCards = {hand}/>
{/if}
{#if hand.length >= 1}
<PulledCard usedCards = {hand}/>
{/if}
{#if hand.length === 2}
<PulledCard usedCards = {hand}/>
{/if}
