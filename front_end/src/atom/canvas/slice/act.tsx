import { t_canvas_grid } from "../utils/utils";
import * as f from "./func";
import { t_act_canvas_slice } from "./type";

function dict_left_up(input:"UP"|"MIDDLE"|"DOWN"|"NONE")
{
	if (input === "UP")
		return "LEFT"
	if (input === "DOWN")
		return "RIGHT"
	return input
}

export default function act_canvas_slice(
	arr:t_canvas_grid[][], 
	action:t_act_canvas_slice)
{
	if (action.type === "SLICE_CROP")
	{
		return f.crop(
			arr,
			action.up,
			action.down,
			action.left,
			action.right
		)
	}
	if (action.type === "SLICE_RESIZE")
		return f.resize(arr, action.height, action.width)
	if (action.type === "SLICE_CENTER")
	{
		let output = f.center(arr, action.x_mode, "X")
		return f.center(output, dict_left_up(action.y_mode), "Y")
	}
	if (action.type === "SLICE_TIMES_SIZE")
		return f.times_size(arr, action.scale_w, action.scale_h)
	if (action.type === "SLICE_DIVIDE_SIZE")
		return f.divide_size(arr, action.scale_w, action.scale_h)
	return arr
}