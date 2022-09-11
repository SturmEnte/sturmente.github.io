<script>
	export let name;
	export let targetId;
</script>

<a href="#{targetId}">
	<div>{name}</div>
</a>

<style>
	a {
		background: var(--gray-one);
		width: 20vw;
		height: 8vh;
		color: white;
		text-decoration: none;
		font-size: 1.5em;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
