import { createContext } from "react";
import * as a from "../../atom/type/alias";

function init_use_state<t>(init:t)
{
	return {
		ss:init,
		setss:(()=>{}) as a.t_setss<t>
	}
}

export const GLOBAL_CONTEXT = createContext<{
	pixel_size:a.t_use_state<number>,
	tool_mode:a.t_use_state<number>,
	new_rgb:a.t_use_state<string>,
}>({
	pixel_size:init_use_state(1),
	tool_mode:init_use_state(0),
	new_rgb:init_use_state("#000000")
})
