<script>
	const STARS = ['⋆', '☆', '✣', '✤', '✥', '✺', '✻'];
    import Star from './Star.svelte'

	export let stars = stars;
</script>

<body>
	{#each stars as star}
		<Star x={star.x} y={star.y} />
	{/each}
</body>

<style>
	body {
		background-color: #120826;
		width: 100vw;
		height: 100vh;
		position: relative;
	}
</style>
