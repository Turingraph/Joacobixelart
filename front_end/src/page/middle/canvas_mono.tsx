import * as a from "../../atom/type/alias";
import CANVAS_BASIC from "./canvas_basic";

export default function	CANVAS_MONO({
	f_on_click = ((input:number)=>{}) as a.t_func_x<number>,
}:{
	f_on_click?:a.t_func_x<number>
})
{
	return <CANVAS_BASIC
		pixel_size={1}
		f_on_click={f_on_click}
	/>
}
