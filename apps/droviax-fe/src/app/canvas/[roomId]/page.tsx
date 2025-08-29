"use client"
import { drawRectangle } from "@/app/drawing-component/rectangle";
import { useEffect, useRef } from "react";

export default function Canvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let canvas = canvasRef.current;
		if (!canvas) return;
		drawRectangle(canvas);
	}, [canvasRef]);

	return (
		<div>
			<canvas ref={canvasRef} height={2000} width={1000} className="bg-black"></canvas>
		</div>
	);
}
