import STR_CSS from "./str";
import * as a from "../../atom/type/alias";
import style from "./str_input.module.css";

export default function STR_INPUT_CSS({
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
		jsx_title = <STR_CSS text={title + ":"}/>
	let jsx_unit = <></>
	if (unit !== undefined)
		jsx_unit = <STR_CSS text={unit}/>
	return <div className={`${style.div}`}>
	{jsx_title}
	<input 
	className={`${style.input}`}
	type="number" 
	onChange={e=>{
		if (isNaN(Number(e.target.value)) === false && Number(e.target.value) >= 1 && Number(e.target.value) <= 256)
			text_input.setss(e.target.value)
	}} value={text_input.ss}/>
	{jsx_unit}
	</div>
}
