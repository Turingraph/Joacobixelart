import { JSX } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";
import * as a from "../../atom/type/alias";

/*
Please avoid using nested <GRID_COLUMN_CX jsx_array={<GRID_COLUMN_CX .../>}/>
or any nested JSX.Element that have name end with _CX. e.g. 
<ABC01_CX jsx_array={<ABC02_CX .../>}/>

because CSS_GRID_COLUMN_CONTEXT context apply to all GRID_COLUMN_CX
which make the child GRID_COLUMN_CX behave unexpectedly.

The main reason that I use useContext in this case is because I want to 
inherit grid property and functionality (show only one selected button at a time)
of multi_select_bs.tsx.
*/

export default function GRID_COLUMN_CX({
	column,
	gap = "0px" as a.t_css,
	jsx_array,
}:{
	column:a.t_css,
	gap?:a.t_css,
	jsx_array:JSX.Element,
})
{
	return <div style={{margin:"0 auto"}}>
		<CONTEXT_CSS_SELECT_ONE_ITEM value={{
			display:"grid",
			gridTemplateColumns:column,
			gap:gap,
			height:"100%",
			minHeight:"100%",
		}}>
			{jsx_array}
		</CONTEXT_CSS_SELECT_ONE_ITEM>
	</div>
}