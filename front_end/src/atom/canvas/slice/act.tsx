import { t_canvas } from "../utils/utils";
// import * as f from "./func";
import { t_act_canvas_slice } from "./type";

export default function act_canvas_slice(
	arr:t_canvas, 
	action:t_act_canvas_slice)
{
	let update_arr = {
		arr:[...arr.arr],
		width:arr.width
	} as t_canvas
	return update_arr
}
