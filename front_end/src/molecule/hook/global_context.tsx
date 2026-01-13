import { createContext } from "react";
import * as a from "../../atom/type/alias";
import { t_setss_arr, t_use_arr } from "../../atom/arr/act";
import { t_rgb_palettes } from "../../atom/arr/type";

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

export const GLOBAL_CONTEXT_USE_STATE = createContext<{
	pixel_size:a.t_use_state<number>,
	tool_mode:a.t_use_state<number>,
	new_rgb:a.t_use_state<string>,
	rgb_arr:t_use_arr<t_rgb_palettes, keyof t_rgb_palettes>
}>({
	pixel_size:init_use_state(1),
	tool_mode:init_use_state(0),
	new_rgb:init_use_state("#000000"),
	rgb_arr:init_use_arr([] as t_rgb_palettes[])
})
