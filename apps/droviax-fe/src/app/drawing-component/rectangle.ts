export function drawRectangle(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext("2d");

	if (!ctx) return;

	let width = 0;
	let height = 0;

	canvas.addEventListener("mousedown", (e) => {
		console.log(e.pageX);
		console.log(e.clientX);
        ctx.rect(e.clientX, e.clientY, width - e.clientY, height - e.clientX);
	});
}
