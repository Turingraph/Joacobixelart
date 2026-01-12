import STR from "../../atom/str/str";
import * as a from "../../atom/type/alias";
import style from "./input_number.module.css";

export default function INPUT_STRING({
	use_state,
	title = undefined,
	unit = undefined,
}:{
	use_state:a.t_use_state<string>,
	title?:undefined|string,
	unit?:undefined|string
})
{
	let jsx_title = <></>
	if (title !== undefined)
		jsx_title = <STR text={title}/>
	let jsx_unit = <></>
	if (unit !== undefined)
		jsx_unit = <STR text={unit}/>
	return <div className={`${style.div}`}>
	{jsx_title}
	<input 
	className={`${style.input}`}
	type="string" 
	onChange={e=>{
		use_state.setss(e.target.value)
	}} value={use_state.ss}/>
	{jsx_unit}
	</div>
}
