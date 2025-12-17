import { useContext, useReducer, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import B_STR from "../../molecule/button/b_str";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_ONE_ITEM from "../../molecule/html/select_one_item";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";
import { B_OPEN_OK_CANCEL } from "../../organism/button/b_open_ok_cancel";
import act_arr from "../../atom/arr/act_arr";
import SELECT_MULTI_ITEMS from "../../molecule/html/select_multi_items";

export function COLOR_PALETTES()
{
	const [SS_Test, setSS_Test] = useState<number>(0)
	const {SS_SelectColor, setSS_SelectColor} = useContext(CONTEXT_SS_MAIN_ART_TOOL).select_color;
	const [SS_SelectMultiColors, setSS_SelectMultiColors] = useReducer(act_arr, {
		unique:true,
		ss:[] as number[]
	})
	const {SS_ColorArray, setSS_ColorArray} = useContext(CONTEXT_SS_MAIN_ART_TOOL).color_array;
	const [SS_Open, setSS_Open] = useState<boolean>(false)
	let jsx_color_palettes = <SELECT_ONE_ITEM
					state_input={{
						ss:SS_SelectColor,
						setss:setSS_SelectColor
					}}
					jsx_select_array={SS_ColorArray.ss.map((item, index:number)=>{
						return <><B_RGB_GRID is_x={SS_Open} title={item[0].toString()}/></>
					})}
					is_horizontal={false}
					/>
	if (SS_Open === true)
	{
		jsx_color_palettes = <SELECT_MULTI_ITEMS
					state_input={{
						ss:SS_SelectMultiColors,
						setss:setSS_SelectMultiColors
					}}
					jsx_select_array={SS_ColorArray.ss.map((item, index:number)=>{
						return <><B_RGB_GRID is_x={SS_Open} title={item[0].toString()}/></>
					})}
					is_horizontal={false}
					/>
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
