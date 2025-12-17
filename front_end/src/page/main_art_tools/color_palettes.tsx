import { useContext, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import B_STR from "../../molecule/button/b_str";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import { B_OPEN_OK_CANCEL } from "../../organism/button/b_open_ok_cancel";
import { COLOR_PALETTES_USE } from "./color_palettes_use";
import { COLOR_PALETTES_EDIT } from "./color_palettes_edit";

export function COLOR_PALETTES()
{
	const [SS_Test, setSS_Test] = useState<number>(0)
	const setSS_ColorArray = useContext(CONTEXT_SS_MAIN_ART_TOOL).color_array.setSS_ColorArray;
	const [SS_Open, setSS_Open] = useState<boolean>(false)
	let jsx_color_palettes = <COLOR_PALETTES_USE/>
	if (SS_Open === true)
	{
		jsx_color_palettes = <COLOR_PALETTES_EDIT/>
	}
	return <>
			<STR_HEADER title={"Color Palettes"}/>
			<hr style={{visibility:"hidden", height:"3px", margin:"0px"}}/>
			<B_STR
				title="Add Color"
				func={(()=>{
					// alert(SS_Test)
					setSS_ColorArray({
						type:"PUSH",
						input:[SS_Test,1,2]
					})
					setSS_Test(SS_Test + 1)
				}) as a.t_func}
			/>
			<B_OPEN_OK_CANCEL
				title_open="Edit Color Palettes"
				ss_open={{
					ss:SS_Open,
					setss:setSS_Open
				}}
				title_ok="Save"
			/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_CX
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={jsx_color_palettes}
			/>
	</>
}

/*
Color the SS_SelectColor
*/
