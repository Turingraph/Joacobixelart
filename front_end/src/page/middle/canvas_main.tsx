import { useContext, useReducer } from "react";
import act_canvas from "../../atom/canvas/main";
import { ENUM_DRAW_MODE } from "../../atom/canvas/utils/data";
import { init_canvas } from "../../atom/canvas/utils/utils";
import { CONTEXT_CANVAS, CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context";
import CANVAS_MONO_USER from "./canvas_mono_user";
import CANVAS_SHAPE_USER from "./canvas_shape_user";
import CANVAS_THROTTLE_USER from "./canvas_throttle_user";

export default function	CANVAS_MAIN()
{
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(32, 32))
	const SS_DrawMode = useContext(CONTEXT_USE_STATE_GLOBAL).draw_mode.ss
	let jsx_body = <CANVAS_THROTTLE_USER/>
	if ([ENUM_DRAW_MODE.DRAW_BACKET, ENUM_DRAW_MODE.DRAW_REPLACE_RGB, ENUM_DRAW_MODE.UTILS_PICK_RGB].includes(SS_DrawMode))
		jsx_body = <CANVAS_MONO_USER/>
	else if ([ENUM_DRAW_MODE.DRAW_CIRCLE, ENUM_DRAW_MODE.DRAW_RECTANGLE, ENUM_DRAW_MODE.DRAW_LINE].includes(SS_DrawMode))
		jsx_body = <CANVAS_SHAPE_USER/>
	return <CONTEXT_CANVAS value={{
		canvas:{ss:SS_Canvas,
		setss:setSS_Canvas,},
		grid_h:25,
		grid_w:25,
		canvas_h:900,
		canvas_w:900
	}}>
		{jsx_body}
	</CONTEXT_CANVAS>
}
