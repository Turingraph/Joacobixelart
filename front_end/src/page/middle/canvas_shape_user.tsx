import { useContext } from "react";
import { ENUM_DRAW_MODE } from "../../atom/canvas/utils/data";
import * as a from "../../atom/type/alias";
import { CONTEXT_CANVAS, CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_SHAPE from "./canvas_shape";

export default function	CANVAS_SHAPE_USER()
{
	const setSS_Canvas = useContext(CONTEXT_CANVAS).canvas.setss
	const SS_DrawMode = useContext(CONTEXT_USE_STATE_GLOBAL).draw_mode.ss
	const SS_PixelSize = useContext(CONTEXT_USE_STATE_GLOBAL).pixel_size.ss
	const SS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.ss
	const down_type = ["SKETCH_RECTANGLE","SKETCH_CIRCLE","SKETCH_LINE"]
	const up_type = ["DRAW_RECTANGLE","DRAW_CIRCLE","DRAW_LINE"]
	let tool_mode = 0 as 0|1|2
	if (SS_DrawMode === ENUM_DRAW_MODE.DRAW_LINE)
		tool_mode = 2
	else if (SS_DrawMode === ENUM_DRAW_MODE.DRAW_CIRCLE)
		tool_mode = 1
	return <CANVAS_SHAPE
		f_mouse_down={((input:{grid_1:number, grid_2:number})=>{
			setSS_Canvas({
				type:down_type[tool_mode] as "SKETCH_RECTANGLE"|"SKETCH_CIRCLE"|"SKETCH_LINE",
				key:"sketch_rgb",
				state:SS_NewRGB,
				size:SS_PixelSize,
				grid_1:input.grid_1,
				grid_2:input.grid_2
			})
		}) as a.t_func_x<{grid_1:number, grid_2:number}>}
		f_mouse_up={((input:{grid_1:number, grid_2:number})=>{
			setSS_Canvas({
				type:up_type[tool_mode] as "DRAW_RECTANGLE"|"DRAW_CIRCLE"|"DRAW_LINE",
				key:"rgb",
				state:SS_NewRGB,
				size:SS_PixelSize,
				grid_1:input.grid_1,
				grid_2:input.grid_2
			})
		}) as a.t_func_x<{grid_1:number, grid_2:number}>}
	/>
}