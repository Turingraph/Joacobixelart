import { JSX } from "react";
import * as a from "../../atom/type/alias";

export default function GRID_TEMPLATE({
	grid_template_columns = "auto" as a.t_css,
	grid_template_rows = "auto" as a.t_css,
	grid_template_areas,
	jsx_array,
	is_fill_width = false as boolean,
	is_fill_height = false as boolean,
}:{
	grid_template_columns?:a.t_css;
	grid_template_rows?:a.t_css;
	grid_template_areas:a.t_css;
	jsx_array:JSX.Element[];
	is_fill_width?:boolean
	is_fill_height?:boolean
})
{
	return <div style={{
		...{
		display:"grid",
		gridTemplateColumns:grid_template_columns,
		gridTemplateRows:grid_template_rows,
		gridTemplateAreas:grid_template_areas,
		width:is_fill_width?"100vh":"100%",
		height:is_fill_height?"100vh":"100%",
		},
		}}>
		{jsx_array.map((item, index:number)=>{
			return <span style={{display:"inline-block"}} key={index}>{item}</span>
		})}
	</div>
}

// DO IT

/*
... is used for concat object literal.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
Operators/Spread_syntax
*/