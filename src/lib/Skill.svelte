<script>
	import { onMount } from "svelte";

	export let name;
	export let experience;
	export let icon;

	onMount(() => {
		const xpElement = document.getElementById("xp");
		xpElement.style.width = `calc(var(--experience-widht) / 10 * ${Number(experience)})`;
	});
</script>

<div id="wrapper">
	<div id="ni-wrapper">
		<img src={icon} alt={name + " icon"} />
		<div id="name">{name}</div>
	</div>
	<div id="experience">
		<span>Experience:</span>
		<div id="xp-bg" />
		<div id="xp" />
	</div>
</div>

<style>
	:root {
		--experience-widht: 20vw;
	}

	#wrapper {
		background: var(--gray-one);
		width: 80vw;
		height: 10vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10px;
		border-radius: 15px;
		margin-bottom: 15px;
	}

	#ni-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	#name {
		font-size: 2rem;
		margin-left: 2vw;
	}

	#experience {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		font-size: 1.5rem;
	}

	#experience span {
		margin-right: 20px;
	}

	#experience #xp-bg,
	#experience #xp {
		height: 10px;
		border-radius: 15px;
	}

	#experience #xp-bg {
		width: var(--experience-widht);
		background: var(--gray-two);
	}

	#experience #xp {
		width: 0;
		background: var(--accent-one);
		margin-right: 20px;
		z-index: 1;
	}

	#experience span,
	#xp-bg {
		position: relative;
		left: calc(var(--experience-widht));
	}

	img {
		height: 8vh;
	}
</style>
