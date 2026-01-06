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
	type:"DRAW_PEN",		// OK, UI
	rgb:string,
	grid:number,
	size:number
} | {
	type:"DRAW_ERASER",		// XX, UI
	grid:number,
	size:number
} | {
	type:"DRAW_REPLACE_RGB",// XX, UI
	rgb:string,
	grid:number,
} | {
	type:"DRAW_LINE",		// XX, UI
	rgb:string,
	grid_1:number,
	grid_2:number,
	size:number
} | {
	type:"DRAW_CIRCLE",		// XX, UI
	rgb:string,
	grid_1:number,
	grid_2:number,
	size:number
} | {
	type:"DRAW_MIRROR",		// XX, UI
	rgb:string,
	grid:number,
	size:number
} | {
	type:"DRAW_BACKET",		// XX, UI
	rgb:string,
	grid:number
} | {
	type:"DRAW_RECTANGLE",	// XX, UI
	rgb:string,
	grid_1:number,
	grid_2:number,
	size:number
}
