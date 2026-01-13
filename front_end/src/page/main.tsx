import { useState } from "react";
import * as a from "../atom/type/alias";
import { GLOBAL_CONTEXT_USE_STATE } from "../molecule/hook/global_context";
import LAYOUT_HEADER from "../organism/layout/layout_header";
import LAYOUT_SIDEBAR from "../organism/layout/layout_sidebar";
import LEFT from "./left/main";
import "./main.css";
import style from "./main.module.css";
import MIDDLE from "./middle/main";
import RIGHT from "./right/main";
import { ARR_SAVE } from "./utils/arr";

function insert_use_state<t>(ss:t, setss:a.t_setss<t>)
{
	return {ss:ss, setss:setss} as a.t_use_state<t>
}

export default function MAIN()
{
	const [SS_NewRGB, setSS_NewRGB] = useState<string>("#000000")
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0)
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(1)
	return <div className={`${style.main}`}>
	<GLOBAL_CONTEXT_USE_STATE
		value={{
			pixel_size:insert_use_state(SS_PixelSize, setSS_PixelSize),
			tool_mode:insert_use_state(SS_ToolMode, setSS_ToolMode),
			new_rgb:insert_use_state(SS_NewRGB, setSS_NewRGB),
		}}
	>
	<LAYOUT_HEADER
		header_height={"40px"}
		header_class_name={"left_taps"}
		tap_lists={ARR_SAVE}
		jsx_body={<LAYOUT_SIDEBAR
		axis_x={false}
		jsx_array={[<LEFT/>, <MIDDLE/>, <RIGHT/>]}
		grid_template_rows={"500px 1fr 300px" as a.t_css}
	/>}/></GLOBAL_CONTEXT_USE_STATE></div>
}