import { init_canvas } from "../../atom/canvas/utils/utils"
import * as a from "../../atom/type/alias"
import GRID_COLUMN_DIV from "../../molecule/html/grid_column_div"
import GRID_COLUMN_DIV_CSS from "./grid_column_div"

const JAX_ARR = init_canvas(32, 32)
const WIDTH = JAX_ARR.width
const COLUMN_CONFIG = "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px"

export function TEST_GRID_COLUMN_DIV()
{
	return <>
	<GRID_COLUMN_DIV_CSS
		column={COLUMN_CONFIG as a.t_css}
		jsx_array={<>
	{JAX_ARR.arr.map((item, index:number)=>{
	let gray = "#333333"
	if (index % 2 === 0 && Math.floor(index/WIDTH) % 2 === 1)
		gray = "#555555"
	if (index % 2 === 1 && Math.floor(index/WIDTH) % 2 === 0)
		gray = "#555555"
	let color = item.plan_rgb
	if (item.plan_rgb === undefined)
		color = item.rgb
	return <div 
		key={index}
		style={{
			backgroundColor:color ? color : gray,
			width: "25px",
			height:"25px"}}>
		<div style={{width:"100%", height:"100%", 
			backgroundColor:item.select ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0)"
		}}></div>
		</div>
			})}</>}/>
	<hr/>
	<GRID_COLUMN_DIV
		column={COLUMN_CONFIG as a.t_css}
		jsx_array={<>
	{JAX_ARR.arr.map((item, index:number)=>{
	let gray = "#333333"
	if (index % 2 === 0 && Math.floor(index/WIDTH) % 2 === 1)
		gray = "#555555"
	if (index % 2 === 1 && Math.floor(index/WIDTH) % 2 === 0)
		gray = "#555555"
	let color = item.plan_rgb
	if (item.plan_rgb === undefined)
		color = item.rgb
	return <div 
		key={index}
		style={{
			backgroundColor:color ? color : gray,
			width: "25px",
			height:"25px"}}>
		<div style={{width:"100%", height:"100%", 
			backgroundColor:item.select ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0)"
		}}></div>
		</div>
			})}</>}/>
	</>
}