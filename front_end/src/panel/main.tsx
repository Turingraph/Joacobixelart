import { JSX } from "react";
import B_STR from "../atom/button/b_str";
import { CSS_FULL_DIV } from "../atom/html/div_css";
import FLEX_COLUMN from "../atom/html/flex_column";
import GRID_TEMPLATE_COLUMNS from "../atom/html/grid_template_columns";
import * as a from "../atom/type/alias";
import CANVAS from "../ui/canvas/canvas";
import MULTI_SELECT_BS from "../ui/html/multi_select_bs";
import AREA_PAINT from "./grid_area_body/area_paint";
import { ARRAY_B_SAVE } from "./utils/array";

export default function MAIN()
{
	const B_FILE_ARRAY:JSX.Element[] = [
		// <div style={{backgroundColor:"orange"}}>
		<MULTI_SELECT_BS jsx_array={ARRAY_B_SAVE.map((item, index:number)=>{
			return <B_STR
				title={item.title}
				func={item.func}
			/>
		})}/>
		// </div>
		,
		// <INLINE_BUTTONS jsx_array={ARRAY_B_SAVE}/>,
		<GRID_TEMPLATE_COLUMNS
			grid_template_areas={"area_paint area_canvas area_transform area_empty" as a.t_css}
			grid_template_columns={"600px 1fr" as a.t_css}
			jsx_array={[
				<div style={{...CSS_FULL_DIV,...{gridArea:"area_paint", backgroundColor:"red", display:"inline-block"}}}>
					{/* <MULTI_MODES_DIV jsx_array={ARRAY_EDITOR_MODE}/> */}
					<AREA_PAINT/>
				</div>,
				<div 
					style={{
						...CSS_FULL_DIV,
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
editor mode
1.	Default
2.	line
3.	plane
4.	transform

to do now
1.	solve display:??? of area_paint.tsx 
2.	add ???px pen size
*/
