export const CANVAS_ACT_DRAW = [
	"DRAW_PEN",
	"DRAW_ERASER",
	"DRAW_REPLACE_RGB",
	"DRAW_LINE",
	"DRAW_RECTANGLE",
	"DRAW_CIRCLE",
	"DRAW_MIRROR",
	"DRAW_BACKET"
]

export type t_act_canvas_draw = {
	type:"DRAW_PEN",		// OK
	rgb:string,
	grid:[number,number],
	size:number
} | {
	type:"DRAW_ERASER",		// OK
	grid:[number,number],
	size:number
} | {
	type:"DRAW_REPLACE_RGB",// OK
	rgb:string,
	grid:[number,number],
} | {
	type:"DRAW_LINE",		// OK
	rgb:string,
	grid_1:[number,number],
	grid_2:[number,number],
	size:number
} | {
	type:"DRAW_CIRCLE",		// XX
	rgb:string,
	grid_1:[number,number],
	grid_2:[number,number],
	size:number
} | {
	type:"DRAW_MIRROR",		// OK
	rgb:string,
	grid:[number,number],
	size:number
} | {
	type:"DRAW_BACKET",		// XX
	rgb:string,
	grid:[number,number]
} | {
	type:"DRAW_RECTANGLE",	// OK
	rgb:string,
	grid_1:[number,number],
	grid_2:[number,number],
	size:number
}
