import act_canvas_button from "./button/act";
import { CANVAS_ACT_BUTTON, t_act_canvas_button } from "./button/type";
import act_canvas_draw from "./draw/act";
import { CANVAS_ACT_DRAW, t_act_canvas_draw } from "./draw/type";
import act_canvas_select from "./select/act";
import { CANVAS_ACT_SELECT, t_act_canvas_select } from "./select/type";
import act_canvas_slice from "./slice/act";
import { CANVAS_ACT_SLICE, t_act_canvas_slice } from "./slice/type";
import { t_canvas } from "./utils/utils";

export type t_act_canvas = t_act_canvas_button 
	| t_act_canvas_draw 
	| t_act_canvas_select
	| t_act_canvas_slice

export default function act_canvas(
	arr:t_canvas, 
	action:t_act_canvas)
{
	if (CANVAS_ACT_BUTTON.includes(action.type)) {
		return act_canvas_button(arr, action as t_act_canvas_button)
	}
	if (CANVAS_ACT_DRAW.includes(action.type)) {
		return act_canvas_draw(arr, action as t_act_canvas_draw)
	}
	if (CANVAS_ACT_SELECT.includes(action.type)) {
		return act_canvas_select(arr, action as t_act_canvas_select)
	}
	if (CANVAS_ACT_SLICE.includes(action.type)) {
		return act_canvas_slice(arr, action as t_act_canvas_slice)
	}
	return arr
}

export type t_setss_canvas = React.ActionDispatch<[action: t_act_canvas]>

/*
Target
1.	pen
2.	eraser
3.	replace color
4.	b. straight line
5.	rectangle
*/
