export const CANVAS_ACT_TRANSFORM = [
	"TRANS_FLIP",		// XX, UI
	"TRANS_UPSIDE_DOWN",// XX, UI
	"TRANS_ROTATE",		// XX, UI
]

export type t_act_canvas_transform = {
	type:"TRANS_FLIP"
} | {
	type:"TRANS_UPSIDE_DOWN"
} | {
	type:"TRANS_ROTATE"
}

/*
// This feature might be used in future for detecting 
// the edge of the image for finite element method 
// based coloring.
{
	type:"TRANS_BLUR"			// XX, ??
	// https://youtu.be/KuXjwB4LzSA?si=6HEaX7kG08Tk5qrB
} | {
	type:"TRANS_SHARP"			// XX, ??
	// https://github.com/Turingraph/JOCR/blob/master/
	// img_process/kernel_2d.py
} | {
	type:"TRANS_GRAY"			// XX, ??
}
*/