import { useContext } from "react"
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext"

export function B_RGB_INPUT()
{
	const setSS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.setSS_NewRGB
	return <>
	<input 
		type="color" 
		style={{height:"100%"}}
		onChange={e=>{
			setSS_NewRGB(e.target.value)
		}}
	></input>
	</>
}