<script>
	import InternalLink from "./lib/InternalLink.svelte";

	import keyboardMousePaper from "./assets/keyboard-mouse-paper.svg";
</script>

<main>
	<div id="about">
		<div id="about-child-01" class="about-child">
			<div class="title">Who am I?</div>
			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum velit qui dolore doloribus iusto necessitatibus? Neque illum aperiam hic rerum in consectetur modi ipsum recusandae corporis
				laboriosam tempore repellat nostrum temporibus, provident nam nihil error necessitatibus pariatur a deserunt mollitia sunt, at quas ullam. Temporibus quibusdam neque, quam amet itaque qui
				doloremque minima accusantium! Id est ab minima, explicabo maiores sunt natus? Cupiditate fugiat illum, odio ad, porro facilis, maiores exercitationem qui consequuntur sequi vel eos laudantium?
				Iure cumque a et culpa facilis ad voluptatum in, at iusto nam, dignissimos beatae earum! Corporis, praesentium ullam alias fugiat modi, nam vero, dignissimos architecto voluptatem nemo totam eaque
				excepturi officiis quae quod aliquam saepe aspernatur? Accusamus maiores a sed soluta. Provident, perspiciatis cumque sit labore eaque non explicabo possimus inventore rerum porro eligendi quae
				harum, suscipit, eos aliquid omnis aliquam voluptates tempore quis? Expedita provident eligendi reprehenderit molestiae eius, beatae, doloremque explicabo in tenetur deleniti rerum, minus
				quibusdam repudiandae? A obcaecati, tenetur vel enim expedita, quidem, quam iste doloribus architecto tempore autem officia odio id itaque unde fugit esse eveniet dolore labore. Quam laboriosam
				laborum, doloremque sed obcaecati quidem, non tenetur aperiam veritatis sunt esse! Commodi, officiis error numquam perspiciatis repellendus repudiandae.
			</div>
		</div>
		<div id="about-child-02" class="about-child">
			<img src={keyboardMousePaper} alt="Keyboard Mouse Paper" />
		</div>
	</div>
	<div id="internal-links">
		<InternalLink name="Skills" targetId="skills" />
		<InternalLink name="Projects" targetId="projects" />
		<InternalLink name="Contact" targetId="contact" />
	</div>
</main>

<style>
	#internal-links {
		width: 100vw;
		height: 10vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	#about {
		height: 90vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: baseline;
	}

	.about-child {
		height: 90vh;
	}

	#about-child-01 {
		background-color: var(--color-one);
		color: white;
		padding: 0 50px;
		width: 60vw;
		font-size: 1.2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: baseline;
	}

	.title {
		font-size: 2.5em;
		margin-bottom: 5px;
	}

	#about-child-02 {
		background-color: var(--color-two);
		width: 40vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#about-child-02 img {
		width: 30vw;
	}
</style>
