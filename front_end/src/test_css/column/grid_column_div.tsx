import { JSX } from "react";
import * as a from "../../atom/type/alias";
import style from "./grid_column_div.module.css";

export default function GRID_COLUMN_DIV_CSS({
	column,
	jsx_array,
}:{
	column:a.t_css,
	jsx_array:JSX.Element,
})
{
	return <div style={{margin:"0 auto"}}>
		<div className={`${style.div}`} style={{gridTemplateColumns:column}}>
			{jsx_array}
		</div>
	</div>
}