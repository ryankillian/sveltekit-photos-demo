export function loadImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onerror = reject;
		img.onload = () => resolve(img);
		img.src = url;
	});
}
