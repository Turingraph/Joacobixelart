import { paint_point, paint_rectangle_donut } from "../utils/paint";
import { flip_index_x, swap_less_than, t_canvas_grid } from "../utils/utils";
import * as f from "./func";
import { t_act_canvas_draw } from "./type";

export default function act_canvas_draw(
	arr:t_canvas_grid[][], 
	action:t_act_canvas_draw)
{
    let UPDATE_ARR = [...arr]
	if (action.type === "DRAW_BACKET") {
		return UPDATE_ARR
		// return f.backet(
		// 	UPDATE_ARR,
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
		// 		UPDATE_ARR,
		// 		action.rgb,
		// 		action.size,
		// 		[up, down, left, right]
		// 	)
		// }
		return paint_rectangle_donut(
			UPDATE_ARR,
			action.rgb,
			action.size,
			[up, down, left, right]
		)
	}
	if (action.type === "DRAW_ERASER" || action.type === "DRAW_PEN") {
		return paint_point(
			UPDATE_ARR,
			action.type === "DRAW_ERASER" ? undefined : action.rgb,
			action.grid,
			action.size,
		)
	}
	if (action.type === "DRAW_LINE") {
		return f.bresenham_line(
			UPDATE_ARR,
			action.rgb,
			action.size,
			action.grid_2,
			action.grid_1,
		)
	}
	if (action.type === "DRAW_MIRROR") {
		UPDATE_ARR = paint_point(
			UPDATE_ARR,
			action.rgb,
			action.grid,
			action.size,
		)
		return paint_point(
			UPDATE_ARR,
			action.rgb,
			flip_index_x(action.grid, UPDATE_ARR[0].length),
			action.size,
		)
	}
	if (action.type === "DRAW_REPLACE_RGB") {
		let prev_rgb = UPDATE_ARR[action.grid[0]][action.grid[1]].rgb
		return f.replace_rgb(
			UPDATE_ARR,
			prev_rgb,
			action.rgb
		)
	}
	return UPDATE_ARR
}
