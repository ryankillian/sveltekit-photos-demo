/** @type {import('./index').RequestHandler} */
export async function get() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
	const photos = await res.json();
	return {
		body: {
			photos
		}
	};
}
