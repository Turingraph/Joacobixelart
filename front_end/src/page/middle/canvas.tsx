import { useReducer } from "react"
import act_canvas from "../../atom/canvas/main"
import { init_canvas } from "../../atom/canvas/utils/utils"
import * as a from "../../atom/type/alias"
import style from "./canvas.module.css"

function write_grid_width(grid_width:number|string)
{
	return typeof grid_width === "string" ? grid_width : grid_width.toString() + "px"
}

function write_grid_template_rows(canvas_width:number, grid_width:number|string)
{
	let output = ""
	const a_text = typeof grid_width === "string" ? grid_width : grid_width.toString() + "px"
	let i = 0
	while (i < canvas_width)
	{
		output += a_text + " "
		i += 1
	}
	return output
}

export default function CANVAS({
	canvas_width,
	grid_width = 25,
	canvas_height,
	grid_height = 25,
}:{
	canvas_width:number
	grid_width?:number|a.t_css
	canvas_height:number
	grid_height?:number|a.t_css
})
{
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(canvas_height, canvas_width))
	return <div
		className={`${style.canvas}`}
		style ={{
			gridTemplateRows:write_grid_template_rows(canvas_height, grid_height),
			gridTemplateColumns:write_grid_template_rows(canvas_width, grid_width)
		}}
	>{
		SS_Canvas.arr.map((item, index:number)=>{
		// const height = Math.floor(SS_Canvas.arr.length/SS_Canvas.width)
		let gray = "#333333"
		if (index % 2 === 0 && Math.floor(index/SS_Canvas.width) % 2 === 1)
			gray = "#555555"
		if (index % 2 === 1 && Math.floor(index/SS_Canvas.width) % 2 === 0)
			gray = "#555555"
		let color = item.plan_rgb
			return <div key={index} style={{
				backgroundColor:color ? color : gray,
				width:write_grid_width(grid_width),
				height:write_grid_width(grid_height),
			}}></div>
		})
	}</div>
}