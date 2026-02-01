import { useContext, useEffect, useRef } from "react"
import * as a from "../../atom/type/alias"
import * as fc from "fabric"
import { CONTEXT_CANVAS } from "../../molecule/hook/context"
import { hex_to_rgb, rgb_to_hex } from "../../atom/utils/rgb_func"
import { scale_vector, vector_addition } from "../../atom/utils/linear_algebra"

function default_grid_color(rgb:undefined|string, index:number, width:number)
{
	if (rgb)
		return rgb
	let gray = "#333333"
	if (index % 2 === 0 && Math.floor(index/width) % 2 === 1)
		gray = "#555555"
	if (index % 2 === 1 && Math.floor(index/width) % 2 === 0)
		gray = "#555555"
	return gray
}

export default function CANVAS_BASIC({
	pixel_size = 1,
	f_reset = (()=>{}) as a.t_func,
	f_on_click = ((input:number)=>{}) as a.t_func_x<number>,
	f_mouse_move = ((input:number)=>{}) as a.t_func_x<number>
}:{
	pixel_size?:number
	f_reset?:a.t_func
	f_on_click?:a.t_func_x<number>
	f_mouse_move?:a.t_func_x<number>
}){
	const {canvas, grid_h, grid_w, canvas_h, canvas_w} = useContext(CONTEXT_CANVAS)
	const Ref_MouseDown = useRef<boolean>(false)
	const width = canvas.ss.width
	const height= Math.floor(canvas.ss.arr.length/width)
	const Ref_Canvas = useRef<null|any>(null)
	const Ref_MouseOut = useRef<number>(0)
	useEffect(()=>{
		const hover_state = {type:"SELECT_HOVER" as "SELECT_HOVER",key:"select" as "select",size:pixel_size}
		const border_h = Math.floor((canvas_h - grid_h * height)/2)
		const border_w = Math.floor((canvas_w - grid_w * width)/2)
		if (Ref_Canvas.current)
		{
			const init_canvas = new fc.Canvas(Ref_Canvas.current,
			{
				width:  canvas_h,
				height: canvas_w,
				cssOnly: true
			}
			)
			init_canvas.backgroundColor = "#f66"			
			let group = new fc.Group(canvas.ss.arr.map((item, index:number)=>{
				let color = hex_to_rgb(default_grid_color(
					item.sketch_rgb ? item.sketch_rgb : item.rgb, 
					index, width))
				let hover_color = scale_vector(hex_to_rgb("#ffffff"), item.select ? 0.2 : 0)
				const left = index % width
				const up = Math.floor(index / width)
				let grid =  new fc.Polyline([
					{ x: grid_w * (left + 0) + border_w, y: grid_h * (up + 0) + border_h},
					{ x: grid_w * (left + 1) + border_w, y: grid_h * (up + 0) + border_h},
					{ x: grid_w * (left + 1) + border_w, y: grid_h * (up + 1) + border_h},
					{ x: grid_w * (left + 0) + border_w, y: grid_h * (up + 1) + border_h},
					], {
					fill:rgb_to_hex(vector_addition(color, hover_color)),
					strokeWidth:0,
				},)
				grid.on({
					"mouseover":()=>{
						canvas.setss({...hover_state,...{state:false, grid:Ref_MouseOut.current}})
						canvas.setss({...hover_state,...{state:true, grid:index}})
						Ref_MouseOut.current = index
					},
					"mousedown":()=>{
						Ref_MouseDown.current = true
						f_on_click(index)},
					"mouseup":()=>{
						Ref_MouseDown.current = false
						f_reset()},
					"mousemove":()=>{
						if (Ref_MouseDown.current === true)
							f_on_click(index)
					}
			})
				return grid
			}), {
				subTargetCheck: true
			})
			init_canvas.add(group)
			init_canvas.on({
				"mouse:out":()=>{
					canvas.setss({...hover_state,...{state:false, grid:Ref_MouseOut.current}})
				}
			})
			init_canvas.renderAll()
			return ()=>{
				init_canvas.dispose()
			}
		}
	}, [canvas, width, grid_h, grid_w, 
		canvas_h, canvas_w, height, pixel_size, 
		f_on_click, f_reset])

	return <div className="fill center_box">
		<canvas id="fabrik_canvas" ref={Ref_Canvas}></canvas>
	</div>
}
	// return <div
	// 	className={`${style.canvas} no_ghost_drag`}
	// 	style ={{
	// 		gridTemplateRows:"repeat("+height+", "+grid_height+")",
	// 		gridTemplateColumns:"repeat("+width+", "+grid_width+")"
	// 	}}
	// 	draggable={false}
	// >{
	// 	canvas.ss.arr.map((item, index:number)=>{
	// 		return <div key={index} 
	// 		className="no_ghost_drag"
	// 		draggable={false}
	// 		onMouseDown={()=>{Ref_MouseDown.current = true}}
	// 		onMouseUp={()=>{
	// 			Ref_MouseDown.current = false
	// 			f_reset()
	// 		}}
	// 		onClick={()=>{f_on_click(index)}}
	// 		onMouseMove={()=>{
	// 			if (Ref_MouseDown.current)
	// 				f_mouse_move(index)
	// 		}}
	// 		onMouseEnter={()=>{on_hover_grid(pixel_size, true , index, canvas.setss)}}
	// 		onMouseLeave={()=>{on_hover_grid(pixel_size, false, index, canvas.setss)}}
	// 		style={{
	// 			backgroundColor:default_grid_color(
	// 			item.sketch_rgb ? item.sketch_rgb : item.rgb, index, canvas.ss.width),
	// 			width:grid_width,
	// 			height:grid_height,
	// 		}}>
	// 		{highlight_grid(item.select)}
	// 		</div>
	// 	})
	// }</div>
