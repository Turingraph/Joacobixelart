export const CANVAS_ACT_SLICE = [
	"SLICE_CROP",
	"SLICE_TIMES_SIZE",
	"SLICE_DIVIDE_SIZE",
	"SLICE_RESIZE",
	"SLICE_CENTER",
]

export type t_act_canvas_slice = {
	type:"SLICE_CROP",			// OK
	up:number,
	down:number,
	left:number,
	right:number,
} | {
	type:"SLICE_TIMES_SIZE",	// OK
	scale_w:number,
	scale_h:number
} | {
	type:"SLICE_DIVIDE_SIZE",	// OK
	scale_w:number,
	scale_h:number
} | {
	type:"SLICE_RESIZE",		// OK
	height:number,
	width:number
} | {
	type:"SLICE_CENTER",		// OK
	x_mode:"LEFT"|"MIDDLE"|"RIGHT"|"NONE",
	y_mode:"UP"|"MIDDLE"|"DOWN"|"NONE"
}
