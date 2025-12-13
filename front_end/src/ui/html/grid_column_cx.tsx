import { JSX } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import { CONTEXT_CSS_MULTI_SELECT_BS } from "../../atom/hook/useContext"

/*
Please avoid using nested <GRID_COLUMN_CX jsx_array={<GRID_COLUMN_CX .../>}/>
because CSS_GRID_COLUMN_CONTEXT context apply to all GRID_COLUMN_CX
which make the child GRID_COLUMN_CX behave unexpectedly.
*/

export function GRID_COLUMN_CX({
	column,
	gap = "0px" as a.t_css,
	title = undefined as undefined|string,
	jsx_array,
	margin = "0 auto" as a.t_css,
}:{
	column:a.t_css,
	gap?:a.t_css,
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
		<CONTEXT_CSS_MULTI_SELECT_BS value={{
			display:"grid",
			gridTemplateColumns:column,
			gap:gap,
			height:"100%",
			minHeight:"100%",
		}}>
			{jsx_array}
		</CONTEXT_CSS_MULTI_SELECT_BS>
	</div>
}