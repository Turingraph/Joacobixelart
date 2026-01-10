import { useState } from "react"
import B_LOGO from "../molecule/button/b_logo"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import { ARR_DRAW } from "../page/utils/arr"

export default function EDITOR_TOOL_CSS(){
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0)
	return 	<SELECT_ONE_TAP 
		class_name={"middle_taps_y"}
		jsx_select_array={
		ARR_DRAW.map((item, index:number)=>{
			return <B_LOGO
			title={item.title}
			logo={item.logo}
			func={item.func}
			/>})}
		use_select_item={{ss:SS_ToolMode, setss:setSS_ToolMode}}
	/>
}