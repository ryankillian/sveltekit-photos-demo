/** @type {import('./[id=integer]@blank').RequestHandler} */
export async function get({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
	const photo = await res.json();
	return {
		body: {
			photo
		}
	};
}
