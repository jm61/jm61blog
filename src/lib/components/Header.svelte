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

	<a href="/" class="site-title">
		<img src="/images/logo.webp" alt="logo" class="logo" />
	</a>

	<HamburgerMenuButton />
	<MainNav />
</header>

<style>
	.logo {
		display: block;
		width: 20%;
		border-radius: 10%;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
	}
	.logo:hover {
		box-shadow: 10px 10px 20px rgba(1000, 0, 0, 0.4);
	}
	@media screen and (max-width: 380px) {
		.logo {
			width: 40%;
		}
	}
</style>
