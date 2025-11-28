import React, {JSX} from "react";
import * as a from "../type/alias";
import { CSS_DIV } from "./div_css";

export default function GRID_TEMPLATE_COLUMNS({
	grid_template_columns,
	grid_template_rows = "auto" as a.t_css,
	grid_template_areas,
	jsx_array
}:{
	grid_template_columns:a.t_css;
	grid_template_rows?:a.t_css;
	grid_template_areas:a.t_css;
	jsx_array:JSX.Element[]
})
{
	return <div style={{
		...{
		display:"grid",
		gridTemplateColumns:grid_template_columns,
		gridTemplateRows:grid_template_rows,
		gridTemplateAreas:grid_template_areas,
		backgroundColor:"black",
		width:"100%",
		},
		// ...CSS_DIV
		}}>
		{jsx_array.map((item, index:number)=>{
			return <span style={{display:"inline-block"}}>{item}</span>
		})}
	</div>
}

/*
... is used for concat object literal.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
Operators/Spread_syntax
*/