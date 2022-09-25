<script>
	export let name;
	export let experience;
	export let icon;
</script>

<div id="wrapper">
	<div id="ni-wrapper">
		<img src={icon} alt={name + " icon"} />
		<div id="name">{name}</div>
	</div>
	<div id="experience" style="position: relative; left: calc(0 - (var(--experience-widht) - (var(--experience-widht) / 10 * {Number(experience)})));">
		<div id="title">Experience:</div>
		<div id="bg">
			<div id="xp" style="width: calc(var(--experience-widht) / 10 * {Number(experience)});" />
		</div>
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

	#bg {
		width: var(--experience-widht);
		background: var(--gray-two);
	}

	#experience #xp,
	#bg,
	#xp {
		height: 10px;
		border-radius: 15px;
	}

	#xp {
		width: 0;
		background: var(--accent-one);
		z-index: 1;
	}

	#experience #title,
	#bg,
	#xp {
		margin-right: 10px;
	}

	img {
		height: 8vh;
	}
</style>
