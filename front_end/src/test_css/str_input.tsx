import { useState } from "react"
import { CONTEXT_OTHER_JSX } from "../atom/hook/useContext"
import B_LOGO from "../molecule/button/b_logo"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import STR_INPUT from "../molecule/str/str_input"
import { B_RGB_INPUT } from "../organism/button/b_rgb_input"
import { ARR_TRANSFORM } from "../page_outdate/utils/arr"

export default function STR_INPUT_CSS(){
	const [SS_PixelStr, setSS_PixelStr] = useState<string>("0")
	return <CONTEXT_OTHER_JSX 
	value={[
		<STR_INPUT text_input={{
			ss:SS_PixelStr,
			setss:setSS_PixelStr
			}}
		unit="px"/>,
		<B_RGB_INPUT/>,
	]}>
	<SELECT_ONE_TAP 
		jsx_select_array={
			ARR_TRANSFORM.map((item, index:number)=>{
			return <B_LOGO
			title={item.title}
			logo={item.logo}
			func={item.func}
		/>})}
	/>
</CONTEXT_OTHER_JSX>
}