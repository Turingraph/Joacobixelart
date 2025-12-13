import * as a from "../../atom/type/alias";

import b_eraser from "../../asset/b_paint_no_rgb/b_eraser.png";
import b_move from "../../asset/b_paint_no_rgb/b_move.png";
import b_rectangle_select from "../../asset/b_paint_no_rgb/b_rectangle_select.png";
import b_rgb_picker from "../../asset/b_paint_no_rgb/b_rgb_picker.png";

import b_bucket from "../../asset/b_paint_rgb/b_bucket.png";
import b_mirror_pen from "../../asset/b_paint_rgb/b_mirror_pen.png";
import b_pen from "../../asset/b_paint_rgb/b_pen.png";
import b_rectangle from "../../asset/b_paint_rgb/b_rectangle.png";
import { t_B_LOGO } from "../../atom/button/b_logo";
import { t_B_STR } from "../../atom/button/b_str";
import { CSS_TEST_DIV } from "../../atom/html/div_css";
import { ui_with_title } from "../../ui/html/multi_modes_page";
// import { t_div_with_title } from "../../ui/html/multi_modes_div";

const f_func = () => {
    alert("Nujabes");
}

const f_func_input = (input:string) => {
    alert(input);
}

export const ARR_B_PAINTS:t_B_LOGO[] = [
	{
		title:"Pen" as a.t_str_hover,
		logo:b_pen as a.t_logo,
		func:(()=>{f_func_input("Pen")}) as a.t_func
	},
	{
		title:"Eraser" as a.t_str_hover,
		logo:b_eraser as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Mittor Pen" as a.t_str_hover,
		logo:b_mirror_pen as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Bucket" as a.t_str_hover,
		logo:b_bucket as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Rectangle" as a.t_str_hover,
		logo:b_rectangle as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Move" as a.t_str_hover,
		logo:b_move as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Rectangle select" as a.t_str_hover,
		logo:b_rectangle_select as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"Color Picker" as a.t_str_hover,
		logo:b_rgb_picker as a.t_logo,
		func:(()=>{f_func()}) as a.t_func
	}
]

export const ARR_B_SAVE:t_B_STR[] = [
	{
		title:"save as",
		func:(()=>{f_func()}) as a.t_func
	},
	{
		title:"import image",
		func:(()=>{f_func()}) as a.t_func
	},	
	{
		title:"export project",
		func:(()=>{f_func()}) as a.t_func
	},	
	{
		title:"create new project",
		func:(()=>{f_func()}) as a.t_func
	},
]

export const ARR_EDITOR_MODES:ui_with_title[] = [
	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"BlueViolet"}}}>Plane Color</div>,
		title:"3D Color"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"lightgreen"}}}>Curve Color</div>,
		title:"Lie Group"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"Gray"}}}>J_f Canvas</div>,
		title:"J_f Canvas"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"Orange"}}}>FEM Color</div>,
		title:"FEM Color"
	},	{
		ui:<div style={{...CSS_TEST_DIV, ...{backgroundColor:"skyblue"}}}>Wave Function</div>,
		title:"Wave Function"
	}
]
