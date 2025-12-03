import { JSX } from "react";
import { CSS_DIV } from "../atom/html/div_css";
import FLEX_COLUMN from "../atom/html/flex_column";
import GRID_TEMPLATE_COLUMNS from "../atom/html/grid_template_columns";
import * as a from "../atom/type/alias";
import CANVAS from "../ui/canvas/canvas";
import AREA_PAINT from "./grid_area_body/area_paint";
import { INLINE_BUTTONS } from "../ui/html/inline_buttons";
import { ARRAY_B_SAVE } from "./utils/array";

export default function MAIN()
{
	const B_FILE_ARRAY:JSX.Element[] = [
		<INLINE_BUTTONS jsx_array={ARRAY_B_SAVE}/>,
		<GRID_TEMPLATE_COLUMNS
			grid_template_areas={"area_paint area_canvas area_transform area_empty" as a.t_css}
			grid_template_columns={"600px 1fr" as a.t_css}
			jsx_array={[
				<div style={{...CSS_DIV,...{gridArea:"area_paint", backgroundColor:"red", display:"inline-block"}}}>
					<AREA_PAINT/>
				</div>,
				<div 
					style={{
						...CSS_DIV,
						...{
							gridArea:"area_canvas", 
							backgroundColor:"green", 
							// display:"inline-block",
							// alignContent:"center",
							display:"flex",
							justifyContent:"center",
							alignItems:"center"
						}}}>
					<CANVAS/>
				</div>
			]}
		/>
	]
	return <FLEX_COLUMN
	is_fill_app={true}
	jsx_array={B_FILE_ARRAY}/>
}

/*
### Question

Why height:100% does not works ?

h1 {
	height: 100%;
}

div {
	min-height: 100%;
}

<div><h1>gyugu</h1></div>

In this case, it not works because 
h1 do not know the current height of div.

https://youtu.be/6aHKdahOfCc?si=DNwU2tnOf4NtrBW7
*/

/*
1.	Default
2.	line
3.	plane
4.	transform
*/
