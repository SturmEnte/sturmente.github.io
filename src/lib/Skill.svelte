<script>
	export let name;
	export let level;
	export let icon;

	level = Number(level);
</script>

<div id="wrapper">
	<img src={icon} alt={name + "icon"} />
	<div>{name}</div>
</div>

<style>
	#wrapper {
		background: var(--gray-one);
		width: 80vw;
		height: 10vh;
	}

	img {
		height: 8vh;
	}
</style>
