import { paint_point, paint_rectangle_donut } from "../utils/paint";
import { flip_index_x, swap_less_than, t_canvas_grid } from "../utils/utils";
import * as f from "./func";
import { t_act_canvas_draw } from "./type";

export default function act_canvas_draw(
	arr:t_canvas_grid[][], 
	action:t_act_canvas_draw)
{
	if (action.type === "DRAW_BACKET") {
		return arr
		// return f.backet(
		// 	arr,
		// 	action.grid,
		// 	action.rgb
		// )
	}
	if (action.type === "DRAW_CIRCLE" || action.type === "DRAW_RECTANGLE") {
		const up = swap_less_than(action.grid_2[0], action.grid_1[0])[0]
		const down = swap_less_than(action.grid_2[0], action.grid_1[0])[1]
		const left = swap_less_than(action.grid_2[1], action.grid_1[1])[0]
		const right = swap_less_than(action.grid_2[1], action.grid_1[1])[1]
		// if (action.type === "DRAW_CIRCLE")
		// {
		// 	return f.draw_circle(
		// 		arr,
		// 		action.rgb,
		// 		action.size,
		// 		[up, down, left, right]
		// 	)
		// }
		return paint_rectangle_donut(
			arr,
			action.rgb,
			action.size,
			[up, down, left, right]
		)
	}
	if (action.type === "DRAW_ERASER" || action.type === "DRAW_PEN") {
		return paint_point(
			arr,
			action.type === "DRAW_ERASER" ? undefined : action.rgb,
			action.grid,
			action.size,
		)
	}
	if (action.type === "DRAW_LINE") {
		return f.bresenham_line(
			arr,
			action.rgb,
			action.size,
			action.grid_2,
			action.grid_1,
		)
	}
	if (action.type === "DRAW_MIRROR") {
		let update_arr = paint_point(
			arr,
			action.rgb,
			action.grid,
			action.size,
		)
		return paint_point(
			update_arr,
			action.rgb,
			flip_index_x(action.grid, update_arr[0].length),
			action.size,
		)
	}
	if (action.type === "DRAW_REPLACE_RGB") {
		let prev_rgb = arr[action.grid[0]][action.grid[1]].rgb
		return f.replace_rgb(
			arr,
			prev_rgb,
			action.rgb
		)
	}
	return arr
}
