import { CSSProperties, JSX } from "react"
import style from "./layout_sidebar.module.css"
import * as a from "../../atom/type/alias";

export default function LAYOUT_SIDEBAR({
	jsx_array,
	grid_template_rows,
	axis_x = true
}:{
	jsx_array:JSX.Element[]
	grid_template_rows:a.t_css
	axis_x?:boolean
})
{
	let grid_template = {} as CSSProperties
	if (axis_x)
		grid_template = {gridTemplateRows:grid_template_rows}
	else
		grid_template = {gridTemplateColumns:grid_template_rows}
	return <div 
	className={`${style.div}`}
	style={grid_template}
	>
		{jsx_array.map((item, index:number)=>{
			return <span key={index}>{item}</span>
		})}
	</div>
}

// You should add {width:"100%", height:"100%"} as this example.

/*
export default function LAYOUT_SIDEBAR_CSS()
{
	return <LAYOUT_SIDEBAR
	grid_template_rows={`2fr 1fr 3fr 1fr 2fr` as a.t_css}
	jsx_array={[
		<div style={{
			width:"100%", height:"100%",
			backgroundColor:"red"}}></div>,
		<div style={{
			width:"100%", height:"100%",
			backgroundColor:"white"}}></div>,
		<div style={{
			width:"100%", height:"100%",
			backgroundColor:"blue"}}></div>,
		<div style={{
			width:"100%", height:"100%",
			backgroundColor:"white"}}></div>,
		<div style={{
			width:"100%", height:"100%",
			backgroundColor:"red"}}></div>,
	]}
/>}
*/
