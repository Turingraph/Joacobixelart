import { t_act_canvas_button } from "./button/type"
import { t_act_canvas_draw } from "./draw/type"
import { t_act_canvas_select } from "./select/type"
import { t_act_canvas_slice } from "./slice/type"
import { paint_1_grid, 
	// paint_brush, paint_test_00 
} from "./utils/paint"
import { t_canvas } from "./utils/utils"

export type t_act_canvas = t_act_canvas_button 
	| t_act_canvas_draw 
	| t_act_canvas_select
	| t_act_canvas_slice

export function act_canvas(
	arr:t_canvas, 
	action:t_act_canvas 
){
	let update_arr = {
		arr:[...arr.arr],
		width:arr.width
	} as t_canvas
	if (action.type === "DRAW_PEN")
	{
		update_arr = paint_1_grid(
			update_arr,
			action.grid,
			action.rgb,
			// action.size
		)

		// update_arr = paint_test_00(
		// 	update_arr,
		// 	action.rgb,
		// 	action.grid,
		// )

		// update_arr = paint_brush(
		// 	update_arr,
		// 	action.rgb,
		// 	action.grid,
		// 	1,	// 1 works, action.size > 1 do not works as expected.
		// 	"LEFT"
		// )
	}
	return update_arr
}

/*
Target
1.	pen
2.	eraser
3.	replace color
4.	b. straight line
5.	rectangle
*/
