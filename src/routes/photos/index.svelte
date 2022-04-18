<script>
	export let photos;
</script>

<h1>Photos</h1>
<div class="grid">
	{#each photos as photo}
		<a sveltekit:prefetch href="/photos/{photo.id}">
			<img src={photo.thumbnailUrl} alt={photo.title} />
		</a>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 0.5rem;
	}
	a,
	img {
		display: block;
		width: 100%;
	}
</style>
