export const CANVAS_ACT_SLICE = [
	"SLICE_CROP",
	"SLICE_TIMES_SIZE",
	"SLICE_DIVIDE_SIZE",
	"SLICE_RESIZE",
	"SLICE_CENTER",
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
} 
// | {	???
// 	type:"SLICE_DIVIDE_SIZE",	// XX, ??
// 	scale_w:number,
// 	scale_h:number
// } 
| {
	type:"SLICE_RESIZE",		// XX, ??
	height:number,
	width:number
} | {
	type:"SLICE_CENTER",		// XX, ??
	x_mode:"LEFT"|"MIDDLE"|"RIGHT"|"NONE",
	y_mode:"UP"|"MIDDLE"|"DOWN"|"NONE"
}
