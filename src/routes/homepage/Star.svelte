<script>
	const STARS = ['⋆', '☆', '✣', '✤', '✥', '✺', '✻'];
	export let x = x;
	export let y = y;

    let div_x = `${x}%`
    let div_y = `${y}%`
    let star_style = `top: ${div_y}; left: ${div_x}`
    console.log(star_style)
</script>

<body>
	<div style={star_style}>HELLO IM RIGHT HERE!!</div>
</body>

<style>
	div {
		color: white;
		position: absolute;
		left: var(--div_x);
		top: var(--div_y);
	}

	body {
		background-color: #120826;
		width: 100vw;
		height: 100vh;
		position: relative;
	}
</style>
