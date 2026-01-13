export const CANVAS_ACT_SLICE = [
	"SLICE_CROP",			// XX, UI
	"SLICE_TIMES_SIZE",		// XX, ??
	// "SLICE_DIVIDE_SIZE",	// *** FUTURE IDEA ***
	"SLICE_RESIZE",			// XX, ??
	"SLICE_CENTER",			// XX, ??
]

export type t_act_canvas_slice = {
	type:"SLICE_CROP",			// XX, UI
	up:number,
	down:number,
	left:number,
	right:number,
} | {
	type:"SLICE_TIMES_SIZE",	// XX, ??
	scale_w:number,
	scale_h:number
} | {
	type:"SLICE_RESIZE",		// XX, ??
	height:number,
	width:number
} | {
	type:"SLICE_CENTER",
	x_mode:"LEFT"|"MIDDLE"|"RIGHT"|"NONE",
	y_mode:"UP"|"MIDDLE"|"DOWN"|"NONE"
}

// *** FUTURE IDEA ***
// | {	???
// 	type:"SLICE_DIVIDE_SIZE",	// XX, ??
// 	scale_w:number,
// 	scale_h:number
// } 