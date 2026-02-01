import { Canvas, Polyline } from 'fabric';
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
			let poly_00 = new Polyline([
			    { x: 10, y: 10 },
			    { x: 10, y: 60 },
			    { x: 50, y: 60 },
			    { x: 50, y: 10 }
				], {
				fill:"#3af",
			});
			let poly_01 = new Polyline([
			    { x: 10 + 40, y: 10 },
			    { x: 10 + 40, y: 60 },
			    { x: 50 + 40, y: 60 },
			    { x: 50 + 40, y: 10 }
				], {
				fill:"#af3",
			});
			poly_00.on("mousedown", function(e){
				console.log("Zutomayo x Bach")
			})
			init_canvas.add(poly_00)
			init_canvas.add(poly_01)
			// let group = new Group([poly_00, poly_01])
			// init_canvas.add(group)
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

/*
To Do Now
1.	Read https://fabricjs.com/docs/old-docs/fabric-intro-part-3/ to use group of polygon.
2.	Replace normal DOM with Polygon object from Fabric JS in canvas_b asic.tsx
3.	Read https://fabricjs.com/docs/events/ to make the event from canvas_...tsx works as expected.
4.	In canvas_...tsx.
*/
