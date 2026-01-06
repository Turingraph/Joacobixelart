import STR from "../../atom/str/str";
import * as a from "../../atom/type/alias";

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
	return <div style={{
		display:"flex", 
		flexDirection:"row", 
		marginLeft:"2px",
		marginRight:"2px",
		backgroundColor:"gray"}}>
	{jsx_title}
	<input 
	style={{
		width:"90px",
		// width:"100%",
		height:"100%",
		display:"inline",
		margin:"2px",
		fontSize:"30px"
	}}
	type="number" 
	onChange={e=>{
		if (isNaN(Number(e.target.value)) === false && Number(e.target.value) >= 1 && Number(e.target.value) <= 256)
			text_input.setss(e.target.value)
	}} value={text_input.ss}/>
	{jsx_unit}
	</div>
}

// https://stackoverflow.com/questions/15583639/
// why-child-input-field-is-wider-than-parent-div/15583683
