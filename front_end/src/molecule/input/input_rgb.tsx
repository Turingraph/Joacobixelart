import * as a from "../../atom/type/alias"

export function INPUT_RGB({
	new_rgb
}:{
	new_rgb:a.t_use_state<string>
})
{
	return <input 
		style={{width:"55px"}}
		type="color" 
		onChange={e=>{
			new_rgb.setss(e.target.value)
		}}
		value={new_rgb.ss}
	></input>
}