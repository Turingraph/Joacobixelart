import EDITOR_TOOL_CSS from "./editor_tool"
import FILE_TAPS_CSS from "./file_taps"
import "./main.css"
import MULTI_MODES_PAGE_CSS from "./multi_ui_modes"
import RGB_PALETTES_CSS from "./rgb_palettes"
import STR_INPUT_CSS from "./str_input"
import style from "./test_css.module.css"

export default function TEST_CSS(){
	return <div 
	className={`center_box ${style.box_x}`}
	>
	{/* <EDITOR_TOOL_CSS/> */}
	<FILE_TAPS_CSS/>
	{/* <MULTI_MODES_PAGE_CSS/> */}
	{/* <RGB_PALETTES_CSS/> */}
	{/* <STR_INPUT_CSS/> */}
	</div>
}
