import LAYOUT_HEADER from "../organism/layout/layout_header";
import LAYOUT_SIDEBAR from "../organism/layout/layout_sidebar";
import LEFT from "./left/main";
import MIDDLE from "./middle/main";
import RIGHT from "./right/main";
import { ARR_SAVE } from "./utils/arr";
import * as a from "../atom/type/alias"
import "./main.css"
import style from "./main.module.css"

export default function MAIN()
{
	return <div className={`${style.main}`}>
	<LAYOUT_HEADER
		header_height={"40px"}
		header_class_name={"left_taps"}
		tap_lists={ARR_SAVE}
		jsx_body={<LAYOUT_SIDEBAR
		axis_x={false}
		jsx_array={[<LEFT/>, <MIDDLE/>, <RIGHT/>]}
		grid_template_rows={"500px 1fr 300px" as a.t_css}
	/>}
	/></div>
}