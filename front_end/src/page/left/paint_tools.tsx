import { useContext } from "react"
import { CONTEXT_OTHER_JSX } from "../../atom/hook/useContext"
import B_LOGO from "../../molecule/button/b_logo"
import INPUT_NUMBER from "../../molecule/input/input_number"
import { INPUT_RGB } from "../../molecule/input/input_rgb"
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap"
import { ARR_DRAW } from "../utils/arr"
import { GLOBAL_CONTEXT } from "../../molecule/hook/global_context"
import * as a from "../../atom/type/alias"

export default function PAINT_TOOLS()
{
	const {ss: SS_NewRGB	, setss: setSS_NewRGB} = useContext(GLOBAL_CONTEXT).new_rgb
	const {ss: SS_ToolMode	, setss: setSS_ToolMode} = useContext(GLOBAL_CONTEXT).tool_mode
	const {ss: SS_PixelSize	, setss: setSS_PixelSize} = useContext(GLOBAL_CONTEXT).pixel_size
	return 	<div 
className="center_box"
style={{
	backgroundColor:"#30d0f0",
	width:"60px", 
	height:"700px"
}}
>
	<CONTEXT_OTHER_JSX value={{
		front:[
		<INPUT_RGB
		new_rgb={{ss:SS_NewRGB, setss:setSS_NewRGB}}
		/>,
		<INPUT_NUMBER 
		title={"Set pen size" as a.t_str_hover}
		use_state={{ss:SS_PixelSize, setss:setSS_PixelSize}}/>
		],
		back:undefined
	}}>
	<SELECT_ONE_TAP
	class_name={"middle_taps_y"}
	jsx_select_array={ARR_DRAW.map((item, index:number)=>{
		return <B_LOGO
		title={item.title}
		logo={item.logo}
		func={item.func}
		/>})}
	use_select_item={{ss:SS_ToolMode, setss:setSS_ToolMode}}
	/>
	</CONTEXT_OTHER_JSX>
</div>
}