import { useContext } from "react";
import { ENUM_DRAW_MODE } from "../../atom/canvas/utils/data";
import * as a from "../../atom/type/alias";
import { CONTEXT_CANVAS, CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_THROTTLE from "./canvas_throttle";

export default function	CANVAS_THROTTLE_USER()
{
	const setSS_Canvas = useContext(CONTEXT_CANVAS).canvas.setss
	const SS_DrawMode = useContext(CONTEXT_USE_STATE_GLOBAL).draw_mode.ss
	const SS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const SS_PixelSize = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	let type = "DRAW_PEN" as "DRAW_PEN"|"DRAW_ERASER"|"DRAW_MIRROR"
	if (SS_DrawMode === ENUM_DRAW_MODE.DRAW_ERASER)
		type = "DRAW_ERASER"
	else if (SS_DrawMode === ENUM_DRAW_MODE.DRAW_MIRROR)
		type = "DRAW_MIRROR"
	return <CANVAS_THROTTLE
		f_mouse_down={((input:number[])=>{
			setSS_Canvas({
				type:type,
				state:SS_NewRGB,
				key:"rgb",
				size:SS_PixelSize,
				grids:input
			})
		}) as a.t_func_x<number[]>}
	/>
}
