import { JSX, useContext } from "react";
import { CONTEXT_CSS_COLOR } from "../hook/useContext";
import * as a from "../type/alias";

export default function GRID_TEMPLATE_ROWS({
	grid_template_rows,
	grid_template_columns = "auto" as a.t_css,
	grid_template_areas = "" as a.t_css,
	jsx_array,
	is_fill_app = false as boolean,
}:{
	grid_template_rows:a.t_css;
	grid_template_columns?:a.t_css;
	grid_template_areas?:a.t_css;
	jsx_array:JSX.Element[];
	is_fill_app?:boolean,
})
{
	const CX_CSS = useContext(CONTEXT_CSS_COLOR);
	return <div style={{
		...{
		display:"grid",
		gridTemplateRows:grid_template_rows,
		gridTemplateColumns:grid_template_columns,
		gridTemplateAreas:grid_template_areas,
		width:"100%",
		height:is_fill_app?"100vh":"100%"
		},
		...CX_CSS
		}}>
		{jsx_array.map((item, index:number)=>{
			return <span style={{display:"inline-block"}}>{item}</span>
		})}
	</div>
}
