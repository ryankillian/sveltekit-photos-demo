<nav>
	<a href="/">Home</a>
	<a href="/photos">Photos</a>
</nav>
<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	nav {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background-color: lemonchiffon;
	}
	nav a {
		text-decoration: none;
		color: #333;
		padding: 0.5rem;
	}
	main {
		width: 100%;
		max-width: 40em;
		margin: 0 auto;
		padding: 2em 1em;
		box-sizing: border-box;
	}
</style>
