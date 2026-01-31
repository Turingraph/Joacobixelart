import { createContext } from "react";
import { t_setss_arr, t_use_arr } from "../../atom/arr/act";
import { t_rgb_palettes } from "../../atom/arr/type";
import { t_use_canvas } from "../../atom/canvas/main";
import { init_canvas } from "../../atom/canvas/utils/utils";
import * as a from "../../atom/type/alias";

function init_use_state<t>(init:t)
{
	return {
		ss:init,
		setss:(()=>{}) as a.t_setss<t>
	}
}

function init_use_arr<t extends {id:number}>(init:t[])
{
	return {
		ss:init,
		setss:(()=>{}) as t_setss_arr<t, keyof t>
	}
}

export const CONTEXT_USE_STATE_GLOBAL = createContext<{
	pixel_size:a.t_use_state<number>,
	draw_mode:a.t_use_state<number>,
	new_rgb:a.t_use_state<string>,
	rgb_arr:t_use_arr<t_rgb_palettes, keyof t_rgb_palettes>
}>({
	pixel_size:init_use_state(1),
	draw_mode:init_use_state(0),
	new_rgb:init_use_state("#000000"),
	rgb_arr:init_use_arr([] as t_rgb_palettes[])
})

export const CONTEXT_CANVAS = createContext<{
	canvas:t_use_canvas
	grid_width:a.t_css
	grid_height:a.t_css
}>({
	canvas:{
		ss:init_canvas(32, 32),
		setss:(()=>{})
	},
	grid_height:"25px" as a.t_css,
	grid_width:"25px" as a.t_css,
})
