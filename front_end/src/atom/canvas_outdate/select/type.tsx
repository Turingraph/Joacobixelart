export const CANVAS_ACT_SELECT = [
	"SELECT_HOVER",
	"SELECT_RECTANGLE",
	"SELECT_CROP"
]

export type t_act_canvas_select = {
	type:"SELECT_HOVER",			// OK
	grid:[number,number],
	size:number,
	select:boolean
} | {
	type:"SELECT_RECTANGLE",		// OK
	grid_1:[number,number],
	grid_2:[number,number],
	select:boolean
} | {
	type:"SELECT_CROP",				// OK
	select:boolean,
	up:number,
	down:number,
	left:number,
	right:number,
}