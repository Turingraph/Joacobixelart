import { useContext } from "react"
import { ENUM_DRAW_MODE } from "../../atom/canvas/utils/data"
import * as a from "../../atom/type/alias"
import { CONTEXT_CANVAS, CONTEXT_USE_STATE_GLOBAL } from "../../molecule/hook/context"
import CANVAS_MONO from "./canvas_mono"

export default function	CANVAS_MONO_USER(){
	const SS_DrawMode = useContext(CONTEXT_USE_STATE_GLOBAL).draw_mode.ss
	const SS_Canvas = useContext(CONTEXT_CANVAS).canvas.ss
	const setSS_NewRGB = useContext(CONTEXT_USE_STATE_GLOBAL).new_rgb.setss
	return <CANVAS_MONO
		f_on_click={((input:number)=>{
			if (SS_DrawMode === ENUM_DRAW_MODE.UTILS_PICK_RGB && SS_Canvas.arr[input].rgb)
				setSS_NewRGB(SS_Canvas.arr[input].rgb as string)
		}) as a.t_func_x<number>}
	/>
}
