import { JSX, useState } from "react";
// import { CONTEXT_CSS_COLOR } from "../atom/hook/useContext";
import * as a from "../atom/type/alias";
import GRID_TEMPLATE_COLUMNS from "../molecule/html/grid_template_columns";
import GRID_TEMPLATE_ROWS from "../molecule/html/grid_template_rows";
import { CSS_FULL_DIV } from "../molecule/html/main_css";
import CANVAS from "../organism/canvas/canvas";
import MAIN_ART_TOOLS from "./main_art_tools/main";
import { TOP_HEADER } from "./top_header/main";
import { ARR_EDITOR_MODES } from "./utils/arr";
import { MULTI_MODES_PAGE } from "../organism/html/multi_modes_page";

export default function MAIN()
{
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);
	const JSX_BODY:JSX.Element[] = [
		<TOP_HEADER/>
		,
		<div style={{gridArea:"area_body", height:"100%"}}>
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
		</div>
	]
	return <GRID_TEMPLATE_ROWS
	is_fill_app={true}
	grid_template_rows={"45px 1fr" as a.t_css}
	grid_template_areas={"area_head area_body" as a.t_css}
	jsx_array={JSX_BODY}/>
}

/*
#############################################################################
### Question
#############################################################################

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

#############################################################################

Why background color of selected <EDITOR_TOOLS/> and selected <COLOR_PALETTES/> are differ ?
```
// ui/html/multi_color_bs.tsx
// this means set the color of the button as blueviolet, but not set the color of parent div.
// <EDITOR_TOOLS/> contains div with child buttons, but <COLOR_PALETTES/> contains only div.
.select_button button {
	background-color: blueviolet;
}
```

#############################################################################
*/

/*
#############################################################################

To Do Now 
1.	Add new useContext for transferring useState/useReducer of panel/main_art_tools/ 
2.	Add delete button in each color palettes
3.	scroll bar for multiple color palettes
4.	delete add color button and then make B_RGB_INPUT generate new color palettes

#############################################################################
*/
