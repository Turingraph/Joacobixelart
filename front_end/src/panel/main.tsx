/*
// import B_LOGO from "../ui/atom/b_logo";
import DIV from "../ui/atom/div";
// import * as a from "../ui/type/alias";

// import b_eraser from "../asset/b_paint_no_rgb/b_eraser.png";
import b_move from "../asset/b_paint_no_rgb/b_move.png";
import b_rectangle_select from "../asset/b_paint_no_rgb/b_rectangle_select.png";
import b_rgb_picker from "../asset/b_paint_no_rgb/b_rgb_picker.png";

import b_bucker from "../asset/b_paint_rgb/b_bucket.png";
import b_mirror_pen from "../asset/b_paint_rgb/b_mirror_pen.png";
import b_pen from "../asset/b_paint_rgb/b_pen.png";
import b_rectangle from "../asset/b_paint_rgb/b_rectangle.png";


import STR_HEADER from "../ui/str/str_header";
import "./main.css";
*/

/*
export default function MAIN()
{
	const f_func = () => {
        alert("Nujabes");
    }
	const f_func_input = (input:string) => {
        alert(input);
    }
	const B_PAINT_ARRAY:JSX.Element[] = [
	<B_LOGO
		str_hover={"Pen" as a.t_str_hover}
		logo={b_pen as a.t_logo}
		f_onclick={(()=>{f_func_input("Pen")}) as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Eraser" as a.t_str_hover}
		logo={b_eraser as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Mirror Pen" as a.t_str_hover}
		logo={b_mirror_pen as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Bucket" as a.t_str_hover}
		logo={b_bucker as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Rectangle" as a.t_str_hover}
		logo={b_rectangle as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Move" as a.t_str_hover}
		logo={b_move as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Rectangle select" as a.t_str_hover}
		logo={b_rectangle_select as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	<B_LOGO
		str_hover={"Color Picker" as a.t_str_hover}
		logo={b_rgb_picker as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>,
	]
	const B_TRANSFORM_ARRAY:JSX.Element[] = [
		<B_LOGO
		str_hover={"This is math Button." as a.t_str_hover}
		logo={b_eraser as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>
	]
	const B_FILE_ARRAY:JSX.Element[] = [
		<B_LOGO
		str_hover={"This is math Button." as a.t_str_hover}
		logo={b_eraser as a.t_logo}
		f_onclick={f_func as a.t_func}
	/>
	]
	return <div id="main">
	<div className="grid_area_body" style={{gridArea:"area_file", backgroundColor:"lightgreen"}}>
	{B_FILE_ARRAY}
	</div>
	<div id="main_body" className="grid_area_body" style={{gridArea:"area_body"}}>
	<div className="grid_area_item" style={{gridArea:"area_paint", backgroundColor:"red"}}>
	<div style={{
		margin:"0px",
		height:"100%",
		minHeight:"100%",
		display:"flex",
		flexDirection:"column"
	}}>
	<DIV
		title={"Paint Canvas"}
		jsx_array={B_PAINT_ARRAY}
		class_name={"b_paint" as a.t_class_name}
		display={"grid" as a.t_css}
		grid_t_col={"40px 40px 40px 40px 40px 40px 40px 40px" as a.t_css}
		grid_t_row={"40px" as a.t_css}
		grid_gap={"0px" as a.t_css}
		margin={"10px" as a.t_css}
		// flex={"1" as a.t_css}
	/>
	<DIV
		title={"Color Palletes"}
		jsx_array={[
			<div
			id = "id_color_palletes"
			style={{
				minWidth:"320px",
				minHeight:"100%",
				height:"100%",
				// objectFit:"cover",
				flex:1,
				backgroundColor:"blue"
			}}
			></div>
		]}
		grid_t_row={"" as a.t_css}
		height={"100%" as a.t_css}
		min_height={"100%" as a.t_css}
		// display={"table-row" as a.t_css}
		margin={"10px" as a.t_css}
		// flex_direction="column"
		background_color={"black" as a.t_css}
		flex={"1" as a.t_css}
	/>
	<STR_HEADER title="title" />
	</div>
	</div>
	<div className="grid_area_item" style={{gridArea:"area_canvas", backgroundColor:"purple"}}>
	<CANVAS/>
	</div>
	
	<div className="grid_area_item" style={{gridArea:"area_transform", backgroundColor:"gray"}}>
	<MAP 
		canvas={"cartesian plane"} 
		position_2d={[0, 1]} 
		zoom_level={1}
	/>
	<DIV
		title={"Transform"}
		jsx_array={B_TRANSFORM_ARRAY}
	/>
	<DIV
		title={"Layer"}
		jsx_array={B_TRANSFORM_ARRAY}
	/>
	</div>
</div>
</div>
}
*/

import { JSX } from "react";
import B_LOGO from "../atom/button/b_logo";
import { CSS_DIV } from "../atom/html/div_css";
import FLEX_COLUMN from "../atom/html/flex_column";
import GRID_TEMPLATE_COLUMNS from "../atom/html/grid_template_columns";
import * as a from "../atom/type/alias";
import b_eraser from "../asset/b_paint_no_rgb/b_eraser.png";
import CANVAS from "../ui/canvas/canvas";
import AREA_PAINT from "./grid_area_body/area_paint";

export default function MAIN()
{
	const f_func = () => {
		alert("Fermat Kitchen")
	}
	const B_FILE_ARRAY:JSX.Element[] = [
		<B_LOGO
			str_hover={"This is math Button." as a.t_str_hover}
			logo={b_eraser as a.t_logo}
			f_onclick={f_func as a.t_func}/>,
		<GRID_TEMPLATE_COLUMNS
			grid_template_areas={"area_paint area_canvas area_transform area_empty" as a.t_css}
			grid_template_columns={"340px 1000px 340px 1fr" as a.t_css}
			jsx_array={[
				<div style={{...CSS_DIV,...{gridArea:"area_paint", backgroundColor:"red", display:"inline-block"}}}>
					<AREA_PAINT/>
				</div>,
				<div 
					style={{
						...CSS_DIV,
						...{
							gridArea:"area_canvas", 
							backgroundColor:"green", 
							// display:"inline-block",
							// alignContent:"center",
							display:"flex",
							justifyContent:"center",
							alignItems:"center"
						}}}>
					<CANVAS/>
				</div>,
				<div style={{...CSS_DIV,...{gridArea:"area_transform", backgroundColor:"blue", display:"inline-block"}}}>
					
				</div>
			]}
		/>
	]
	return <FLEX_COLUMN
	is_fill_app={true}
	jsx_array={B_FILE_ARRAY}/>
}

/*
### Question

Why height:100% does not works ?

h1 {
	height: 100%;
}

div {
	min-height: 100%;
}

<div><h1>gyugu</h1></div>

In this case, it not works because 
h1 do not know the current height of div.

https://youtu.be/6aHKdahOfCc?si=DNwU2tnOf4NtrBW7
*/