/** @type {import('./index').RequestHandler} */

export async function post({ request }) {
	const data = await request.formData();

	const title = /** @type {string} */ (data.get('title'));
	const file = /** @type {File} */ (data.get('file'));

	/** @type {Record<string, string>} */
	const errors = {};
	const values = title;

	if (title.length < 10) {
		errors.title = 'Title must be more than 10 characters';
	}

	if (file.size > 100000) {
		errors.file = 'File must be less than 100KB';
	}

	if (Object.keys(errors).length) {
		return {
			body: {
				errors: errors,
				values: values
			}
		};
	}

	return {
		status: 303,
		headers: {
			Location: `/photos/${title}`
		}
	};
}
