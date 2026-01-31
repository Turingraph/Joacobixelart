import { useContext, useRef } from "react"
import { t_setss_canvas, } from "../../atom/canvas/main"
import { t_act_canvas_select } from "../../atom/canvas/select/type"
import * as a from "../../atom/type/alias"
import style from "./canvas.module.css"
import { CONTEXT_CANVAS } from "../../molecule/hook/context"

/*
TO DO NOW
1.	Create CANVAS for 3 mode
	1.	Paint grids using throttle (with reusable throttle file)
	2.	Sketch and Paint (Rectangle, Circle, Line)
	3.	One paint ("DRAW_BACKET"|"DRAW_REPLACE_RGB")
*/

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

function highlight_grid(select:boolean)
{
	return 	<div className="fill" style={{
	backgroundColor:select ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0)"
	}}></div>
}

function on_hover_grid(
	pixel_size:number,
	select:boolean,
	grid:number,
	canvas_setss:t_setss_canvas
){
	canvas_setss({key:"select" as "select", size:pixel_size, 
		state:select, grid:grid, type:"SELECT_HOVER"} as t_act_canvas_select)
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
	const {canvas, grid_height, grid_width} = useContext(CONTEXT_CANVAS)
	const Ref_MouseDown = useRef<boolean>(false)
	const width = canvas.ss.width
	const height= Math.floor(canvas.ss.arr.length/width)
	return <div
		className={`${style.canvas} no_ghost_drag`}
		style ={{
			gridTemplateRows:"repeat("+height+", "+grid_height+")",
			gridTemplateColumns:"repeat("+width+", "+grid_width+")"
		}}
		draggable={false}
	>{
		canvas.ss.arr.map((item, index:number)=>{
			return <div key={index} 
			className="no_ghost_drag"
			draggable={false}
			onMouseDown={()=>{Ref_MouseDown.current = true}}
			onMouseUp={()=>{
				Ref_MouseDown.current = false
				f_reset()
			}}
			onClick={()=>{f_on_click(index)}}
			onMouseMove={()=>{
				if (Ref_MouseDown.current)
					f_mouse_move(index)
			}}
			onMouseEnter={()=>{on_hover_grid(pixel_size, true , index, canvas.setss)}}
			onMouseLeave={()=>{on_hover_grid(pixel_size, false, index, canvas.setss)}}
			style={{
				backgroundColor:default_grid_color(
				item.sketch_rgb ? item.sketch_rgb : item.rgb, index, canvas.ss.width),
				width:grid_width,
				height:grid_height,
			}}>
			{highlight_grid(item.select)}
			</div>
		})
	}</div>
}
