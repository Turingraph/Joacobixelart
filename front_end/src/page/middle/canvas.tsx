import { useContext, useEffect, useReducer, useState } from "react"
import act_canvas from "../../atom/canvas/main"
import { init_canvas } from "../../atom/canvas/utils/utils"
import * as a from "../../atom/type/alias"
import { GLOBAL_CONTEXT_USE_STATE } from "../../molecule/hook/global_context"
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

function write_color(rgb:undefined|string, index:number, width:number)
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

function highlight_div(select:boolean)
{
	return 	<div className="fill" style={{
	backgroundColor:select ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0)"
	}}></div>
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
	const SS_ToolMode = useContext(GLOBAL_CONTEXT_USE_STATE).tool_mode.ss
	const SS_NewRGB = useContext(GLOBAL_CONTEXT_USE_STATE).new_rgb.ss
	const PixelSize = useContext(GLOBAL_CONTEXT_USE_STATE).pixel_size.ss
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(PixelSize)
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(canvas_height, canvas_width))
	useEffect(()=>{
		if (SS_ToolMode > 3 && SS_PixelSize !== 1)
			setSS_PixelSize(1)
		else if (SS_ToolMode <= 3 && SS_PixelSize !== PixelSize)
			setSS_PixelSize(PixelSize)
	}, [PixelSize, SS_PixelSize, SS_ToolMode])
	const PENCIL = {state:SS_NewRGB, key:"rgb" as "rgb", size:SS_PixelSize}
	const HOVER_GRID = {key:"select" as "select", size:SS_PixelSize}
	return <div
		className={`${style.canvas}`}
		style ={{
			gridTemplateRows:write_grid_template_rows(canvas_height, grid_height),
			gridTemplateColumns:write_grid_template_rows(canvas_width, grid_width)
		}}
	>{
		SS_Canvas.arr.map((item, index:number)=>{
			return <div key={index} 
onMouseEnter={()=>{
setSS_Canvas({...HOVER_GRID, ...{type:"SELECT_HOVER", grid:index, state:true}})}}
onMouseLeave={()=>{
setSS_Canvas({...HOVER_GRID, ...{type:"SELECT_HOVER", grid:index, state:false}})}}
			onClick={()=>{
if (SS_ToolMode === 0)
	setSS_Canvas({...PENCIL, ...{type:"DRAW_PEN", grid:index}})
if (SS_ToolMode === 1)
	setSS_Canvas({...PENCIL, ...{type:"DRAW_ERASER", grid:index}})
if (SS_ToolMode === 3)
	setSS_Canvas({...PENCIL, ...{type:"DRAW_MIRROR", grid:index}})
			}}
			style={{
				backgroundColor:write_color(
				item.plan_rgb ? item.plan_rgb : item.rgb, index, SS_Canvas.width),
				width:write_grid_width(grid_width),
				height:write_grid_width(grid_height),
			}}>
			{highlight_div(item.select)}
			</div>
		})
	}</div>
}