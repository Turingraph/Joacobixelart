import { useReducer, useState } from "react";
import act_arr_key from "../../atom/arr/act_arr";
import { t_rgb_grid } from "../../atom/arr/type";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO, CONTEXT_SS_LP_PAINT } from "../../molecule/hook/one_time_useContext";
import GRID_TEMPLATE_COLUMNS from "../../molecule/html/grid_template_columns";
import { CSS_FULL_DIV } from "../../molecule/html/main_css";
import CANVAS from "../../organism/canvas/canvas";
import { MULTI_MODES_PAGE } from "../../organism/html/multi_modes_page";
import LP_PAINT from "../lp_paint/main";
import { LP_RGB_PALETTES_EDITOR } from "../lp_rgb_palettes_editor/main";
import { ARR_EDITOR_MODES } from "../utils/arr";

export function STUDIO()
{
	// studio/main.tsx
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);

	// CONTEXT_SS_GLOBAL_STUDIO
	const [SS_RGBArr, setSS_RGBArr] = useReducer(
		act_arr_key,
		[] as t_rgb_grid[]);
	const [SS_NewRGB, setSS_NewRGB] = useState<string>("#000000")

	// lp_paint/color_palettes.tsx
	const [SS_SelectRGB, setSS_SelectRGB] = useState<number>(0);
	
	// lp_paint/editor_tools.tsx
	const [SS_PixelSize, setSS_PixelSize] = useState<number>(1);
	const [SS_ToolMode, setSS_ToolMode] = useState<number>(0);

	return 	<CONTEXT_SS_GLOBAL_STUDIO
	value={{
		rgb_arr:{
			SS_RGBArr:SS_RGBArr,
			setSS_RGBArr:setSS_RGBArr},
		new_rgb:{
			SS_NewRGB:SS_NewRGB,
			setSS_NewRGB:setSS_NewRGB
			},
		}}>
	<GRID_TEMPLATE_COLUMNS
		grid_template_areas={"area_paint area_canvas" as a.t_css}
		grid_template_columns={"600px 1fr" as a.t_css}
		jsx_array={[
			<div style={{...CSS_FULL_DIV,...{gridArea:"area_paint", backgroundColor:"orange", display:"inline-block"}}}>
				<MULTI_MODES_PAGE
					ui_body={[
						...[{
								ui:<CONTEXT_SS_LP_PAINT
									value={{
									select_rgb:{
										SS_SelectRGB:SS_SelectRGB,
										setSS_SelectRGB:setSS_SelectRGB,
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
										<LP_PAINT/>
									</CONTEXT_SS_LP_PAINT>,
								title:"Paint"
							},{
								ui:<LP_RGB_PALETTES_EDITOR/>,
								title:"RGB Palettes Editor"
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
	]}/>
</CONTEXT_SS_GLOBAL_STUDIO>
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