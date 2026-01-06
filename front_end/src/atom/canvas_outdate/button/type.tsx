
export const CANVAS_ACT_BUTTON = [
	"BUTTON_FLIP",
	"BUTTON_UPSIDE_DOWN",
	"BUTTON_ROTATE",
	"BUTTON_BLUR",
	"BUTTON_SHARP",
	"BUTTON_GRAY"
]

export type t_act_canvas_button = {
	type:"BUTTON_FLIP"			// OK
} | {
	type:"BUTTON_UPSIDE_DOWN"	// OK
} | {
	type:"BUTTON_ROTATE"		// OK
} | {
	type:"BUTTON_BLUR"			// XX
	// https://youtu.be/KuXjwB4LzSA?si=6HEaX7kG08Tk5qrB
} | {
	type:"BUTTON_SHARP"			// XX
	// https://github.com/Turingraph/JOCR/blob/master/
	// img_process/kernel_2d.py
} | {
	type:"BUTTON_GRAY"			// OK
}
