import { drawRectangle } from "@/app/drawing-component/rectangle";
import { useEffect, useRef } from "react";

export default function Canvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let canvas = canvasRef.current;
		if (!canvas) return;
		drawRectangle(canvas);
	}, []);

	return <div>Canvas</div>;
}
