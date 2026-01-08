import { JSX } from "react";
import * as a from "../../atom/type/alias";
import "./main.css";

export default function GRID_TEMPLATE_COLUMNS({
	grid_template_columns,
	grid_template_rows = "auto" as a.t_css,
	grid_template_areas,
	jsx_array,
	is_fill_app = false as boolean,
}:{
	grid_template_columns:a.t_css;
	grid_template_rows?:a.t_css;
	grid_template_areas:a.t_css;
	jsx_array:JSX.Element[];
	is_fill_app?:boolean
})
{
	return <div style={{
		...{
		display:"grid",
		gridTemplateColumns:grid_template_columns,
		gridTemplateRows:grid_template_rows,
		gridTemplateAreas:grid_template_areas,
		width:is_fill_app?"100vh":"100%",
		height:"100%",
		},
		}}>
		{jsx_array.map((item, index:number)=>{
			return <span style={{display:"inline-block"}} key={index}>{item}</span>
		})}
	</div>
}