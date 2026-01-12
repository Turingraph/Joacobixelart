import { useState } from "react"
import { CONTEXT_OTHER_JSX } from "../atom/hook/useContext"
import B_LOGO from "../molecule/button/b_logo"
import INPUT_NUMBER from "../molecule/input/input_number"
import { INPUT_RGB } from "../molecule/input/input_rgb"
import SELECT_ONE_TAP from "../molecule/selection_taps/select_one_tap"
import { ARR_TRANSFORM } from "../page_outdate/utils/arr"

export default function STR_INPUT_CSS(){
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(0)
	return <CONTEXT_OTHER_JSX 
	value={{
	front:undefined,
	back:[
		<INPUT_NUMBER use_state={{
			ss:SS_PixelSize,
			setss:setSS_PixelSize
			}}
		unit="px"/>,
		<INPUT_RGB/>,
	]}}>
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