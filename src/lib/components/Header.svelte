<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<div class="contLogo">
		<a href="/" class="site-title" title="Home">
			<img src="/images/logo.webp" alt="logo" class="logo" />
		</a>
	</div>

	<div class="box" />

	<HamburgerMenuButton />
	<MainNav />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border-bottom: 3px solid var(--accent);
		background: rgb(130, 138, 109);
		background: linear-gradient(90deg, rgb(149, 170, 95) 38%, rgba(169, 132, 103, 1) 73%);
	}
	.contLogo {
		max-width: 50%;
	}
	.logo {
		width: 40%;
		border-radius: 10%;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
	}
	.logo:hover {
		box-shadow: 10px 10px 20px rgba(50, 100, 0, 0.4);
	}
	@media screen and (max-width: 380px) {
		.logo {
			width: 50%;
		}
	}
</style>
