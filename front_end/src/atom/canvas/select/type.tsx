import { t_arg_grids, t_arg_shape } from "../utils/type"

export const CANVAS_ACT_SELECT = [
	"SELECT_HOVER",			// OK
	"SELECT_HOVER_MIRROR",	// OK
	"SELECT_RECTANGLE",		// XX UI
	"SELECT_CROP"			// XX UI
]

export type t_act_canvas_select = (
	t_arg_grids<"select"> & {type:"SELECT_HOVER"|"SELECT_HOVER_MIRROR"}
) | (t_arg_shape<"select"> & {type:"SELECT_RECTANGLE"|"SELECT_CROP"})
