import { useContext } from "react"
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext"

export function B_RGB_INPUT()
{
	const setSS_NewHexRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_hex_rgb.setSS_NewHexRGB
	return <>
	<input 
		type="color" 
		style={{height:"100%"}}
		onChange={e=>{
			setSS_NewHexRGB(e.target.value)
		}}
	></input>
	</>
}