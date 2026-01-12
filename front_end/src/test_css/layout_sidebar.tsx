import LAYOUT_SIDEBAR from "../organism/layout/layout_sidebar";
import * as a from "../atom/type/alias"

export default function LAYOUT_SIDEBAR_CSS()
{
	return <LAYOUT_SIDEBAR
	// axis_x={false}
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