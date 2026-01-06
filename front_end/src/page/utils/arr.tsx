import * as a from "../../atom/type/alias";

import bucket from "../../asset/draw/bucket.png";
import circle from "../../asset/draw/circle.png";
import eraser from "../../asset/draw/eraser.png";
import line from "../../asset/draw/line.png";
import mirror_pen from "../../asset/draw/mirror_pen.png";
import pen from "../../asset/draw/pen.png";
import rectangle from "../../asset/draw/rectangle.png";
import replace_rgb from "../../asset/draw/replace_rgb.png";

import crop from "../../asset/transform/crop.png";
import flip from "../../asset/transform/flip.png";
import rotate from "../../asset/transform/rotate.png";
import upside_down from "../../asset/transform/upside_down.png";

import rectangle_select from "../../asset/utils/rectangle_select.png"
import rgb_picker from "../../asset/utils/rgb_picker.png"

import { t_B_LOGO } from "../../molecule/button/b_logo";
import { t_B_STR } from "../../molecule/button/b_str";
import { CSS_TEST_DIV } from "../../molecule/html/main_css";
import { ui_with_title } from "../../organism/html/multi_modes_page";

export const ARR_DRAW:t_B_LOGO[] = [
	{
		title:"Pen" as a.t_str_hover,
		logo:pen as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Eraser" as a.t_str_hover,
		logo:eraser as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Mittor Pen" as a.t_str_hover,
		logo:mirror_pen as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Bucket" as a.t_str_hover,
		logo:bucket as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Draw rectangle" as a.t_str_hover,
		logo:rectangle as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Draw straight Line" as a.t_str_hover,
		logo:line as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Replace selected color with new color" as a.t_str_hover,
		logo:replace_rgb as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Draw Circle" as a.t_str_hover,
		logo:circle as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Move selected Rectangle area to new area" as a.t_str_hover,
		logo:rectangle_select as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Crop Canvas" as a.t_str_hover,
		logo:crop as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Pick rgb color" as a.t_str_hover,
		logo:rgb_picker as a.t_logo,
		func:(()=>{}) as a.t_func
	}]

export const ARR_TRANSFORM:t_B_LOGO[] = [
	{
		title:"Flip Canvas in left direction" as a.t_str_hover,
		logo:flip as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Rotate Canvas" as a.t_str_hover,
		logo:rotate as a.t_logo,
		func:(()=>{}) as a.t_func
	},
	{
		title:"Make Canvas become upside down" as a.t_str_hover,
		logo:upside_down as a.t_logo,
		func:(()=>{}) as a.t_func
	},
]

export const ARR_SAVE:t_B_STR[] = [
	{
		title:"save as",
		func:(()=>{}) as a.t_func
	},
	{
		title:"import image",
		func:(()=>{}) as a.t_func
	},	
	{
		title:"export project",
		func:(()=>{}) as a.t_func
	},	
	{
		title:"create new project",
		func:(()=>{}) as a.t_func
	},
]

export const ARR_EDITOR_MODES:ui_with_title[] = [	
	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"BlueViolet"}}}>Get Color from f(x, y) = z multiplied by Quaternion Field</div>,
		title:"Image to Pixel"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"Gray"}}}>Edit Canvas</div>,
		title:"Canvas Editor"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"Orange"}}}>Finite Element Method</div>,
		title:"Simulation"
	}
]

// export function EMPTY_JSX_ARR(length:number, width:a.t_css, height:a.t_css)
// {
// 	let output = []
// 	let i = 0
// 	while (i < length)
// 	{
// 		output.push(<div style={{
// 			visibility:"hidden",
// 			width:width,
// 			height:height
// 		}}></div>)
// 		i += 1
// 	}
// 	return output
// }
