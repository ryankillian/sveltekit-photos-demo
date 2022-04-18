/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	return {
		body: { item: 'qq' }
	};
}
