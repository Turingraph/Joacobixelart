import { JSX } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";

export function GRID_COLUMN({
	column,
	gap,
	title = undefined as undefined|string,
	jsx_array,
	margin = "0 auto" as a.t_css,
}:{
	column:a.t_css,
	gap:a.t_css,
	title?:undefined|string,
	jsx_array:JSX.Element,
	margin?:a.t_css
})
{
	let JSX_TITLE:JSX.Element = <></>
	if (title !== undefined)
		JSX_TITLE = <STR_HEADER title={title}/>
	return <div style={{margin:margin}}>
		{JSX_TITLE}
		<div style={{
			display:"grid",
			gridTemplateColumns:column,
			gap:gap,
			height:"100%",
			minHeight:"100%",
		}}>{jsx_array}</div>
	</div>
}