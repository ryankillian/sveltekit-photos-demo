<script context="module" lang="ts">
	import { browser } from '$app/env';
	import { loadImage } from '$lib/utils';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ props }) {
		if (browser) {
			await loadImage(props.photo.url);
		}

		return {
			props
		};
	}
</script>

<script lang="ts">
	export let photo;
</script>

<h1>{photo.title}</h1>
<img src={photo.url} alt={photo.title} />
<a href="/photos">Back</a>

<style>
	img {
		width: 100%;
	}
</style>
