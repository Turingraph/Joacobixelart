import { paint_point } from "../utils/paint";
import { t_canvas } from "../utils/utils";
// import * as f from "./func";
import { t_act_canvas_draw } from "./type";

export default function act_canvas_draw(
	arr:t_canvas, 
	action:t_act_canvas_draw)
{
	let update_arr = {
		arr:[...arr.arr],
		width:arr.width
	} as t_canvas
	if (action.type === "DRAW_PEN" || action.type === "DRAW_ERASER")
	{
		update_arr = paint_point(
			update_arr,
			action.type === "DRAW_ERASER" ? undefined : action.rgb,
			action.grid,
			action.size
		)
	}
	return update_arr
}
