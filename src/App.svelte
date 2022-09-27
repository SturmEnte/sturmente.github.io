<script>
	import skills from "./skills";

	import InternalLink from "./lib/InternalLink.svelte";
	import Skill from "./lib/Skill.svelte";
	import Popup from "./lib/Popup.svelte";

	import keyboardMousePaper from "./assets/keyboard-mouse-paper.svg";

	import githubIcon from "./assets/github.png";
	import discordIcon from "./assets/discord.svg";
	import emailIcon from "./assets/email.png";

	function openPopup(id) {
		document.getElementById(id).style.display = "block";
		document.body.style.overflowY = "hidden";
	}

	function hidePopup(id) {
		document.getElementById(id).style.display = "none";
		document.body.style.overflowY = "scroll";
	}
</script>

<main>
	<div id="about">
		<div id="about-child-01" class="about-child">
			<div class="title">Who am I?</div>
			<div>
				<span style="color: red;">TBD</span><br />
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum velit qui dolore doloribus iusto necessitatibus? Neque illum aperiam hic rerum in consectetur modi ipsum recusandae corporis laboriosam
				tempore repellat nostrum temporibus, provident nam nihil error necessitatibus pariatur a deserunt mollitia sunt, at quas ullam. Temporibus quibusdam neque, quam amet itaque qui doloremque minima accusantium!
				Id est ab minima, explicabo maiores sunt natus? Cupiditate fugiat illum, odio ad, porro facilis, maiores exercitationem qui consequuntur sequi vel eos laudantium? Iure cumque a et culpa facilis ad
				voluptatum in, at iusto nam, dignissimos beatae earum! Corporis, praesentium ullam alias fugiat modi, nam vero, dignissimos architecto voluptatem nemo totam eaque excepturi officiis quae quod aliquam
				saepe aspernatur? Accusamus maiores a sed soluta. Provident, perspiciatis cumque sit labore eaque non explicabo possimus inventore rerum porro eligendi quae harum, suscipit, eos aliquid omnis aliquam
				voluptates tempore quis? Expedita provident eligendi reprehenderit molestiae eius, beatae, doloremque explicabo in tenetur deleniti rerum, minus quibusdam repudiandae? A obcaecati, tenetur vel enim
				expedita, quidem, quam iste doloribus architecto tempore autem officia odio id itaque unde fugit esse eveniet dolore labore. Quam laboriosam laborum, doloremque sed obcaecati quidem, non tenetur aperiam
				veritatis sunt esse! Commodi, officiis error numquam perspiciatis repellendus repudiandae.
			</div>
		</div>
		<div id="about-child-02" class="about-child">
			<img src={keyboardMousePaper} alt="Keyboard Mouse Paper" title="Image by Megan_Rexazin" />
		</div>
	</div>
	<div id="internal-links">
		<InternalLink name="Skills" targetId="skills" />
		<InternalLink name="Projects" targetId="projects" />
		<InternalLink name="Contact" targetId="contacts" />
	</div>
	<div id="skills">
		<div id="skill-title">Skills</div>
		<div id="skill-wrapper">
			{#each skills as skill}
				<Skill name={skill.name} experience={skill.experience} icon={skill.icon} />
			{/each}
		</div>
	</div>
	<div id="contacts">
		<a class="contact" href="https://github.com/sturmente">
			<img src={githubIcon} alt="GitHub Icon" />
			<span style="color: white;">GitHub</span>
		</a>
		<div
			class="contact"
			on:click={() => {
				openPopup("discord");
			}}
		>
			<img src={discordIcon} alt="Discord Icon" />
			<span style="color: #5865F2;">Discord</span>
		</div>
		<div
			class="contact"
			on:click={() => {
				openPopup("email");
			}}
		>
			<img src={emailIcon} alt="Email Icon" />
			<span style="color: white;">Email</span>
		</div>
	</div>
</main>

<div id="popups">
	<div id="discord" style="display: none;">
		<Popup id="discord" title="Discord" fields={[{ name: "Username + Tag", value: "SturmEnte#4367" }]} hideFunction={hidePopup} />
	</div>
	<div id="email" style="display: none;">
		<Popup id="email" title="Email" fields={[{ name: "Email Adress", value: "sturmente@proton.me" }]} hideFunction={hidePopup} />
	</div>
</div>

<style>
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
		background-color: var(--gray-one);
		padding: 0 50px;
		width: 60vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: baseline;
	}

	.title {
		font-size: 2.5rem;
		margin-bottom: 5px;
	}

	#about-child-02 {
		background-color: var(--accent-one);
		width: 40vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#about-child-02 img {
		width: 30vw;
	}

	#internal-links {
		width: 100vw;
		height: 10vh;
		background: var(--gray-two);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	#skills {
		padding-top: 10px;
		padding-left: 15px;
	}

	#skill-title {
		font-size: 2rem;
	}

	#skill-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}

	#contacts {
		background: var(--gray-one);
		font-size: 1.3rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 20px;
	}

	#contacts span,
	#contacts div {
		padding-left: 10px;
	}

	#contacts img {
		height: 5vh;
	}

	.contact {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: space-around;
		cursor: pointer;
	}
</style>
