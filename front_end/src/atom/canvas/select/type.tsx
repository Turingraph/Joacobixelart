export const CANVAS_ACT_SELECT = [
	"SELECT_HOVER",
	"SELECT_RECTANGLE",
	"SELECT_CROP"
]

export type t_act_canvas_select = {
	type:"SELECT_HOVER",			// OK
	grid:number,
	size:number,
	select:boolean
} | {
	type:"SELECT_RECTANGLE",		// XX, UI
	grid_1:number,
	grid_2:number,
	select:boolean
} | {
	type:"SELECT_CROP",				// XX
	select:boolean,
	up:number,
	down:number,
	left:number,
	right:number,
}