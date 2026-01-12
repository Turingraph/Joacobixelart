import { useContext } from "react"
import { CONTEXT_OTHER_JSX } from "../../atom/hook/useContext"
import * as a from "../../atom/type/alias"
import B_LOGO from "../../molecule/button/b_logo"
import { GLOBAL_CONTEXT } from "../../molecule/hook/global_context"
import INPUT_NUMBER from "../../molecule/input/input_number"
import { INPUT_RGB } from "../../molecule/input/input_rgb"
import SELECT_ONE_TAP from "../../molecule/selection_taps/select_one_tap"
import LAYOUT_SIDEBAR from "../../organism/layout/layout_sidebar"
import MULTI_MODES_PAGE from "../../organism/layout/multi_modes_page"
import { ARR_DRAW } from "../utils/arr"
import RGB_PALETTES from "./rgb_palettes"
import SIMULATION from "./simulation"

export default function LEFT()
{
	const {ss: SS_NewRGB	, setss: setSS_NewRGB} = useContext(GLOBAL_CONTEXT).new_rgb
	const {ss: SS_ToolMode	, setss: setSS_ToolMode} = useContext(GLOBAL_CONTEXT).tool_mode
	const {ss: SS_PixelSize	, setss: setSS_PixelSize} = useContext(GLOBAL_CONTEXT).pixel_size
	return <div className="fill"><LAYOUT_SIDEBAR
		axis_x={false}
		grid_template_rows={"1fr 60px" as a.t_css}
		jsx_array={[
			// *********************************************************
			/*** COLOR PALETTES / SIMULATION ***/
			<MULTI_MODES_PAGE
			jsx_array={[
				{title:"Color Palettes", body:<RGB_PALETTES/>},
				{title:"Simulation", body:<SIMULATION/>},
			]}/>,
			// *********************************************************
			/*** DRAWING TOOL ***/
			<div 
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
			// *********************************************************
		]}
	/></div>
}