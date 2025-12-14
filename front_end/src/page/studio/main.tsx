import GRID_TEMPLATE_COLUMNS from "../../molecule/html/grid_template_columns";
import { CSS_FULL_DIV } from "../../molecule/html/main_css";
import { MULTI_MODES_PAGE } from "../../organism/html/multi_modes_page";
import {  ARR_EDITOR_MODES } from "../utils/arr";
import * as a from "../../atom/type/alias";
import MAIN_ART_TOOLS from "../main_art_tools/main";
import { useState } from "react";
import CANVAS from "../../organism/canvas/canvas";

export function STUDIO()
{
	const [SS_LeftPanelMode, setSS_LeftPanelMode] = useState<number>(0);
	return 	<GRID_TEMPLATE_COLUMNS
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
}
