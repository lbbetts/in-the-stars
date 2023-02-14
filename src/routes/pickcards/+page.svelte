<script>
// @ts-nocheck

	import CardField from './CardField.svelte'
	import { fade } from 'svelte/transition';
	import { currentQuestion } from '../stores.js';
	import { goto } from '$app/navigation'

	$: path = ""
	let awaitCards;

	let updateQuestion = () => {
		currentQuestion.set(path)
		console.log($currentQuestion)
	}

	function nextPage(route) {
		goto(route) 
	}
	
</script>

<body>
	<h1>CHOOSE YOUR DESTINY</h1>
	<h2>SET YOUR PATH</h2>
	<input bind:value={path}>
	{#if path.includes("?")}
	<h2>
		PICK 3 CARDS
	</h2>

	<div class="pulled-cards-container">
		<CardField bind:cardCount={awaitCards}/>
	</div>
	{/if}
	{#if awaitCards ===3}
	{updateQuestion()}
	<div class="transition-screen" transition:fade="{{delay: 750, duration: 2000 }}"></div>
	{nextPage("./reflection")}
	{/if}
</body>

<style>
	body {
		font-family: 'Press Start 2P', sans-serif;
		position:fixed;
        padding:0;
        margin:0;

        top:0;
        left:0;

        width: 100%;
        height: 100%;
        background-image: url('$lib/assets/default_background.png');
    }
	h1 {
		text-align: center;
		color: #fff7f8;
		text-shadow: 3px 3px #ff8142;
	}
	h2{
		text-align: center;
		margin-top: 25px;
		margin-bottom: 25px;
		color: #ffda45;
	}

	input{
		margin: auto;
		display: block;
		outline: none;

		border: solid #49e7ec 3px;
		background-color: #3368DC;

		font-family: "Press Start 2P", sans-serif;
	}

	.pulled-cards-container {
		margin: auto;
		justify-content: space-evenly;

		width:575px;
	}
</style>