<script>
	import InternalLink from "./lib/InternalLink.svelte";
	import Skill from "./lib/Skill.svelte";

	import keyboardMousePaper from "./assets/keyboard-mouse-paper.svg";

	import cssIcon from "./assets/skills/css3.svg";
	import cppIcon from "./assets/skills/cpp.svg";
	import discordjsIcon from "./assets/skills/discordjs.png";
	import electronIcon from "./assets/skills/electron.svg";
	import expressIcon from "./assets/skills/express.png";
	import gitIcon from "./assets/skills/git.svg";
	import gulpIcon from "./assets/skills/gulp.svg";
	import htmlIcon from "./assets/skills/html5.svg";
	import javascriptIcon from "./assets/skills/js.svg";
	import jwtIcon from "./assets/skills/jwt.svg";
	import mongodbIcon from "./assets/skills/mongodb.svg";
	import mysqlIcon from "./assets/skills/mysql.svg";
	import nodejsIcon from "./assets/skills/nodejs.svg";
	import phpIcon from "./assets/skills/php.svg";
	import postmanIcon from "./assets/skills/postman.png";
	import rustIcon from "./assets/skills/rust.svg";
	import sassIcon from "./assets/skills/sass.svg";
	import typescriptIcon from "./assets/skills/typescript.svg";
	import viteIcon from "./assets/skills/vite.svg";
	import vueIcon from "./assets/skills/vue.svg";
	import webpackIcon from "./assets/skills/webpack.svg";

	/* Copyright icons
	css
	discord.js 	edited
	git
	html
	mongodb
	php
	postman 	edited
	rust
	vue
	*/

	const skills = [
		{
			name: "Css",
			experience: 7,
			icon: cssIcon,
		},
		{
			name: "C++",
			expericence: 5,
			icon: cppIcon,
		},
		{
			name: "Discord.js",
			experience: 9,
			icon: discordjsIcon,
		},
		{
			name: "Electron",
			experience: 5,
			icon: electronIcon,
		},
		{
			name: "Express",
			experience: 9,
			icon: expressIcon,
		},
		{
			name: "Git",
			experience: 8,
			icon: gitIcon,
		},
		{
			name: "Gulp.js",
			experience: 7,
			icon: gulpIcon,
		},
		{
			name: "Html",
			experience: 9.5,
			icon: htmlIcon,
		},
		{
			name: "JavaScript",
			experience: 10,
			icon: javascriptIcon,
		},
		{
			name: "Json Web Token",
			experience: 8,
			icon: jwtIcon,
		},
		{
			name: "MongoDB",
			experience: 8,
			icon: mongodbIcon,
		},
		{
			name: "MySQL",
			experience: 6,
			icon: mysqlIcon,
		},
		{
			name: "Node.js",
			experience: 10,
			icon: nodejsIcon,
		},
		{
			name: "php",
			experience: 4,
			icon: phpIcon,
		},
		{
			name: "Postman",
			experience: 7,
			icon: postmanIcon,
		},
		{
			name: "Rust",
			experience: 6,
			icon: rustIcon,
		},
		{
			name: "Sass",
			experience: 6,
			icon: sassIcon,
		},
		{
			name: "TypeScript",
			experience: 9,
			icon: typescriptIcon,
		},
		{
			name: "Vite",
			experience: 9,
			icon: viteIcon,
		},
		{
			name: "Vue.js",
			experience: 8,
			icon: vueIcon,
		},
		{
			name: "Webpack",
			experience: 8,
			icon: webpackIcon,
		},
	];
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
		<InternalLink name="Contact" targetId="contact" />
	</div>
	<div id="skills">
		<div id="skill-title">Skills</div>
		<div id="skill-wrapper">
			{#each skills as skill, i}
				<Skill name={skill.name} experience={skill.experience} icon={skill.icon} />
			{/each}
		</div>
	</div>
</main>

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
		font-size: 1.2rem;
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
		margin-left: 20px;
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
</style>
