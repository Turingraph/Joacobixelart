import { paint_outside_rectangle, paint_point, paint_rectangle } from "../utils/paint";
import { swap_less_than, t_canvas_grid } from "../utils/utils";
import { t_act_canvas_select } from "./type";

export default function act_canvas_select(
	arr:t_canvas_grid[][], 
	action:t_act_canvas_select)
{
	if (action.type === "SELECT_HOVER")
	{
		return paint_point(
			arr,
			action.select,
			action.grid,
			action.size,
		)
	}
	if (action.type === "SELECT_RECTANGLE") {
		const up = swap_less_than(action.grid_2[0], action.grid_1[0])[0]
		const down = swap_less_than(action.grid_2[0], action.grid_1[0])[1]
		const left = swap_less_than(action.grid_2[1], action.grid_1[1])[0]
		const right = swap_less_than(action.grid_2[1], action.grid_1[1])[1]
		return paint_rectangle(
			arr,
			action.select,
			[up, down, left, right]
		)
	}
	if (action.type === "SELECT_CROP")
	{
		return paint_outside_rectangle(
			arr,
			action.select,
			[action.up, action.down, action.left, action.right]
		)
	}
	return arr
}