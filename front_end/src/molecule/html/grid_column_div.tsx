import { JSX } from "react";
import * as a from "../../atom/type/alias";

export function GRID_COLUMN_DIV({
	column,
	gap = "0px" as a.t_css,
	jsx_array,
	margin = "0 auto" as a.t_css,
}:{
	column:a.t_css,
	gap?:a.t_css,
	jsx_array:JSX.Element,
	margin?:a.t_css
})
{
	return <div style={{margin:margin}}>
		<div style={{
			display:"grid",
			gridTemplateColumns:column,
			gap:gap,
			height:"100%",
			minHeight:"100%",
		}}>
			{jsx_array}
		</div>
	</div>
}