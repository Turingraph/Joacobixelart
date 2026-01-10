import "./main.css"
import MULTI_MODES_PAGE_CSS from "./multi_ui_modes"
import STR_INPUT_CSS from "./str_input"
import style from "./test_css.module.css"

export default function TEST_CSS(){
	return <div 
	className={`center_box ${style.box_x}`}
	>
	{/* <EDITOR_TOOL_CSS/> */}
	{/* <FILE_TAPS_CSS/> */}
	{/* <MULTI_MODES_PAGE_CSS/> */}
	{/* <RGB_PALETTES_CSS/> */}
	<STR_INPUT_CSS/>
	</div>
}
