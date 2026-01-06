import { t_canvas_grid } from "../utils/utils";
import * as f from "./func";
import { t_act_canvas_button } from "./type";

export default function act_canvas_button(
	arr:t_canvas_grid[][], 
	action:t_act_canvas_button)
{
	if (action.type === "BUTTON_ROTATE")
		return f.rotate(arr)
	if (action.type === "BUTTON_FLIP")
		return f.flip(arr)
	if (action.type === "BUTTON_UPSIDE_DOWN")
		return f.up_side_down(arr)
	if (action.type === "BUTTON_GRAY")
		return f.gray(arr)
	return arr
}
