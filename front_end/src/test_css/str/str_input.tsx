import STR from "../../atom/str/str";
import * as a from "../../atom/type/alias";
import "./main.css";

export default function STR_INPUT({
	text_input,
	title = undefined,
	unit = undefined
}:{
	text_input:a.t_use_state<string>,
	title?:undefined|string,
	unit?:undefined|string
})
{
	let jsx_title = <></>
	if (title !== undefined)
		jsx_title = <STR text={title + ":"}/>
	let jsx_unit = <></>
	if (unit !== undefined)
		jsx_unit = <STR text={unit}/>
	return <div className="STR_INPUT">
	{jsx_title}
	<input 
	className="STR_INPUT"
	type="number" 
	onChange={e=>{
		if (isNaN(Number(e.target.value)) === false && Number(e.target.value) >= 1 && Number(e.target.value) <= 256)
			text_input.setss(e.target.value)
	}} value={text_input.ss}/>
	{jsx_unit}
	</div>
}
