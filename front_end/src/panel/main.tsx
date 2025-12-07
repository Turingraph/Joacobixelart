import { JSX, useState } from "react";
import B_STR from "../atom/button/b_str";
import { CSS_FULL_DIV } from "../atom/html/div_css";
import { CSS_CONTEXT } from "../atom/hook/useContext";
import GRID_TEMPLATE_COLUMNS from "../atom/html/grid_template_columns";
import GRID_TEMPLATE_ROWS from "../atom/html/grid_template_rows";
import * as a from "../atom/type/alias";
import CANVAS from "../ui/canvas/canvas";
import { MULTI_MODES_PAGE } from "../ui/html/multi_modes_page";
import { ARR_B_SAVE, ARR_EDITOR_MODES } from "./utils/arr";
import AREA_PAINT from "./grid_area_body/area_paint";

export default function MAIN()
{
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(1);
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);
	const JSX_BODY:JSX.Element[] = [
		<div style={{gridArea:"area_head", backgroundColor:"gray"}}>
		{ARR_B_SAVE.map((item, index:number)=>{
			return <B_STR
				title={item.title}
				func={item.func}
			/>
		})}
		</div>
		,
		<div style={{gridArea:"area_body", height:"100%"}}>
		<CSS_CONTEXT value={{backgroundColor:"red"}}>
		<GRID_TEMPLATE_COLUMNS
			grid_template_areas={"area_paint area_canvas" as a.t_css}
			grid_template_columns={"600px 1fr" as a.t_css}
			jsx_array={[
				<div style={{...CSS_FULL_DIV,...{gridArea:"area_paint", backgroundColor:"orange", display:"inline-block"}}}>
					<MULTI_MODES_PAGE
						ui_body={[
							...[{
								ui:<AREA_PAINT 
								pixel_size={{
									ss:SS_PixelSize,
									setss:setSS_PixelSize
								}}/>,
								title:"Main"
							}],
							...ARR_EDITOR_MODES]}
						ui_state={{
							ss:SS_LeftPanelMode,
							setss:setSS_LeftPanelMode,
						}}/>
				</div>,
				<div 
					style={{
						...CSS_FULL_DIV,
						...{
							gridArea:"area_canvas", 
							backgroundColor:"blue", 
							display:"flex",
							justifyContent:"center",
							alignItems:"center"
						}}}>
					<CANVAS/>
				</div>
			]}
		/>
		</CSS_CONTEXT>
		</div>
	]
	return <GRID_TEMPLATE_ROWS
	is_fill_app={true}
	grid_template_rows={"45px 1fr" as a.t_css}
	grid_template_areas={"area_head area_body" as a.t_css}
	jsx_array={JSX_BODY}/>
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
To Do Now
1.	MULTI_MODES_PAGE buttons in horiszontal scroll bar
2.	useState<JSX.Element> for MULTI_MODES_PAGE
3.	add <AREA_PAINT/> in main of MULTI_MODES_PAGE
*/
