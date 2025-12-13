import { JSX, useState } from "react";
import { CONTEXT_CSS_COLOR } from "../atom/hook/useContext";
import { CSS_FULL_DIV } from "../atom/html/div_css";
import GRID_TEMPLATE_COLUMNS from "../atom/html/grid_template_columns";
import GRID_TEMPLATE_ROWS from "../atom/html/grid_template_rows";
import * as a from "../atom/type/alias";
import CANVAS from "../ui/canvas/canvas";
import { MULTI_MODES_PAGE } from "../ui/html/multi_modes_page";
import MAIN_ART_TOOLS from "./main_art_tools/main";
import { TOP_HEADER } from "./top_header/main";
import { ARR_EDITOR_MODES } from "./utils/arr";

export default function MAIN()
{
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);
	const JSX_BODY:JSX.Element[] = [
		<TOP_HEADER/>
		,
		<div style={{gridArea:"area_body", height:"100%"}}>
		<CONTEXT_CSS_COLOR value={{backgroundColor:"red"}}>
		<GRID_TEMPLATE_COLUMNS
			grid_template_areas={"area_paint area_canvas" as a.t_css}
			grid_template_columns={"600px 1fr" as a.t_css}
			jsx_array={[
				<div style={{...CSS_FULL_DIV,...{gridArea:"area_paint", backgroundColor:"orange", display:"inline-block"}}}>
					<MULTI_MODES_PAGE
						ui_body={[
							...[{
								ui:<MAIN_ART_TOOLS/>,
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
		</CONTEXT_CSS_COLOR>
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
1.	scroll bar
2.	useReducer with atom/arr/ for array of div in area_file.tsx 

Color input
2.	Color palettes
*/
