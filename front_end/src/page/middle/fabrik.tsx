import { Canvas } from 'fabric';
import { useEffect, useRef } from "react";

/*
Reference
*	https://youtu.be/eSiEBH7D1mM?si=L6WksjytAJedSw02
*/

export default function	FABRIK()
{
	const Ref_Canvas = useRef<null|any>(null)
	// const [SS_Canvas, setSS_Canvas] = useState<null|any>(null)

	useEffect(()=>{
		if (Ref_Canvas.current)
		{
			const init_canvas = new Canvas(Ref_Canvas.current, {
				width: 600,
				height: 600
			})
			init_canvas.backgroundColor = "#f66"
			init_canvas.renderAll()
			// setSS_Canvas(init_canvas)
			return ()=>{
				init_canvas.dispose()
			}
		}
	}, [])

	return <div className="fill center_box">
		<canvas id="fabrik_canvas" ref={Ref_Canvas}></canvas>
	</div>
}