import * as a from "../../atom/type/alias";

import b_eraser from "../../asset/b_paint_no_rgb/b_eraser.png"
import b_move from "../../asset/b_paint_no_rgb/b_move.png";
import b_rectangle_select from "../../asset/b_paint_no_rgb/b_rectangle_select.png";
import b_rgb_picker from "../../asset/b_paint_no_rgb/b_rgb_picker.png";

import { t_B_LOGO } from "../../atom/button/b_logo";
import b_bucket from "../../asset/b_paint_rgb/b_bucket.png";
import b_mirror_pen from "../../asset/b_paint_rgb/b_mirror_pen.png";
import b_pen from "../../asset/b_paint_rgb/b_pen.png";
import b_rectangle from "../../asset/b_paint_rgb/b_rectangle.png";

const f_func = () => {
    alert("Nujabes");
}
const f_func_input = (input:string) => {
    alert(input);
}

export const ARRAY_B_PAINTS:t_B_LOGO[] = [
	{
		str_hover:"Pen" as a.t_str_hover,
		logo:b_pen as a.t_logo,
		f_onclick:(()=>{f_func_input("Pen")}) as a.t_func
	},
	{
		str_hover:"Eraser" as a.t_str_hover,
		logo:b_eraser as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Mittot Pen" as a.t_str_hover,
		logo:b_mirror_pen as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Bucket" as a.t_str_hover,
		logo:b_bucket as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Rectangle" as a.t_str_hover,
		logo:b_rectangle as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Move" as a.t_str_hover,
		logo:b_move as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Rectangle select" as a.t_str_hover,
		logo:b_rectangle_select as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	},
	{
		str_hover:"Color Picker" as a.t_str_hover,
		logo:b_rgb_picker as a.t_logo,
		f_onclick:(()=>{f_func()}) as a.t_func
	}
]