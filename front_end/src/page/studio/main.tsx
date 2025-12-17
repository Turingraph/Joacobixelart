import GRID_TEMPLATE_COLUMNS from "../../molecule/html/grid_template_columns";
import { CSS_FULL_DIV } from "../../molecule/html/main_css";
import { MULTI_MODES_PAGE } from "../../organism/html/multi_modes_page";
import {  ARR_EDITOR_MODES } from "../utils/arr";
import * as a from "../../atom/type/alias";
import MAIN_ART_TOOLS from "../main_art_tools/main";
import { useReducer, useState } from "react";
import CANVAS from "../../organism/canvas/canvas";
import act_arr, { t_ss_arr } from "../../atom/arr/act_arr";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";

export function STUDIO()
{
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);

	// color_palettes.tsx
	const [SS_SelectColor, setSS_SelectColor] = useState<number>(0);
	const [SS_ColorArray, setSS_ColorArray] = useReducer(
		act_arr,
		{ss:[], unique:false} as t_ss_arr<[number,number,number]>);
	
	// editor_tools.tsx
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(1);
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0);

	return 	<GRID_TEMPLATE_COLUMNS
				grid_template_areas={"area_paint area_canvas" as a.t_css}
				grid_template_columns={"600px 1fr" as a.t_css}
				jsx_array={[
					<div style={{...CSS_FULL_DIV,...{gridArea:"area_paint", backgroundColor:"orange", display:"inline-block"}}}>
						<MULTI_MODES_PAGE
							ui_body={[
								...[{
									ui:<CONTEXT_SS_MAIN_ART_TOOL
										value={{
										select_color:{
											SS_SelectColor:SS_SelectColor,
											setSS_SelectColor:setSS_SelectColor,
										},
										color_array:{
											SS_ColorArray:SS_ColorArray,
											setSS_ColorArray:setSS_ColorArray,
										},
										pixel_size:{
											SS_PixelSize:SS_PixelSize,
											setSS_PixelSize:setSS_PixelSize,
										},
										tool_mode:{
											SS_ToolMode:SS_ToolMode,
											setSS_ToolMode:setSS_ToolMode,
										}}
										}
										>
										<MAIN_ART_TOOLS/>
										</CONTEXT_SS_MAIN_ART_TOOL>,
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
}

/*
Button
1.	Select All
2.	Unselect All
3.	Transform Color 
*	Mode: Quaternion Rotation, HSV, Matrix
*	Exit: Add New Color, Replace Existing Color, Cancel
4.	Merge Color 
*	Mode: Pick Color, Average Color
*	Exit: Ok, Cancel

Rule
1.	Click "Edit Color Palettes"
2.	Click select
3.	Click Transform/Merge Color
4.	Click Mode
5.	Edit Mode
6.	If Color already exists in Color Palettes, then merge color automatically
7.	Click Exist

Note that user must be able to activate/inactivate button that allow them to see the out put canvas.

Codomain
1.	Empty Set (Delete)
2.	non Invertible Function (Merge)
3.	Function (Transform)

Pixel Art Property
1.	title:Color
*/