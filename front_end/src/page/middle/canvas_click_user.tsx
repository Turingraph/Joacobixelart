import * as fc from "fabric";
import { useContext } from "react";
import * as a from "../../atom/type/alias";
import { CONTEXT_CANVAS, CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_BASIC from "./canvas_basic";
import { draw_thicker_straight_line, get_point_grids, update_grids } from "./paint";
import { t_practical_shape, t_rgb_point } from "./type";

/*
export function CANVAS_CLICK({
	f_on_click
}:{
	f_on_click:t_canvas_on_click
}){
	const pixel_rgb = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const pixel_size = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	return <CANVAS_BASIC
		pixel_size={pixel_size}
		pixel_rgb={pixel_rgb as string|undefined}
		f_on_click={f_on_click}
		// f_mouse_down={f_on_click}
		// f_mouse_down={{
		// 	target:"NORMAL",
		// 	func:((input)=>{
		// 		let i = 0
		// 		while (i < input.grids.length)
		// 		{
		// 			let jnput = JSON.parse(JSON.stringify(input))
		// 			jnput.grids = null
		// 			f_on_click.func({
		// 				...input,
		// 				...{grid:input.grids[i]}
		// 			})
		// 			i += 1
		// 		}
		// 	}) as a.t_func_x<t_rgb_points & {target:fc.Polyline[]}>}}
	/>
}*/

export default function CANVAS_CLICK_USER()
{
	// const tool_mode = useContext(CONTEXT_SS_GLOBAL_STUDIO).tool_mode
	const pixel_rgb = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const pixel_size = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	const all_grids = useContext(CONTEXT_CANVAS).all_grids
	let jsx_body = <CANVAS_BASIC
		pixel_size={pixel_size}
		pixel_rgb={pixel_rgb}
		f_on_click={((input)=>{
			// console.log("grids", get_point_grids(all_grids, {grid:input.grid, size:input.size}))
				update_grids(
					get_point_grids(all_grids, {grid:input.grid, size:input.size}),
					input.target, pixel_rgb)
			}) as a.t_func_x<t_rgb_point & {target:fc.Polyline[]}>
		}
		f_mouse_down={{
			scale:"GLOBAL",
			func:((input)=>{
				const shape = {
					grid_1:input.grid_1,
					grid_2:input.grid_2,
					size:input.size
				}
				update_grids(
					draw_thicker_straight_line(all_grids, shape),
					input.target, input.rgb
				)
			}) as a.t_func_x<t_practical_shape>
		}}
	/>
	return <>{jsx_body}</>
}
