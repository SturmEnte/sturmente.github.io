<script>
	export let id;
	export let title;
	export let fields;
	export let hideFunction;
</script>

<div
	id="bg"
	on:click|self={() => {
		hideFunction(id);
	}}
>
	<div id="popup">
		<div id="title">{title}</div>
		{#each fields as field}
			<div id="field">
				<div>{field.name}:</div>
				<div id="value">{field.value}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	#popup {
		background: var(--gray-one);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 15px;
		padding: 10px;
	}

	#title {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	#value {
		background: var(--gray-two);
		padding: 5px;
		border-radius: 15px;
	}

	#bg {
		position: fixed;
		top: 0;
		left: 0;
		background: var(--black-st);
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
