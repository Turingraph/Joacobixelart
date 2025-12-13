import React, { JSX, useReducer, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import B_STR from "../../atom/button/b_str";
import * as a from "../../atom/type/alias";
import { B_RGB_GRID } from "../../ui/button/b_rgb_grid";
import act_arr, { t_ss_arr } from "../../atom/arr/act_arr";
import { GRID_COLUMN_CX } from "../../ui/html/grid_column_cx";
import MULTI_SELECT_BS from "../../ui/html/multi_select_bs";

export function COLOR_PALETTES()
{
	const [SS_SelectColor, setSS_SelectColor] = useState<number>(0);
	const [SS_ColorArray, setSS_ColorArray] = useReducer(
		act_arr,
		{ss:[], unique:false} as t_ss_arr<JSX.Element>);
	return <>
			<STR_HEADER title={"Color Palettes"}/>
			<hr style={{visibility:"hidden", height:"3px", margin:"0px"}}/>
			<B_STR
				title="Add Color"
				func={(()=>{
					setSS_ColorArray({
						type:"PUSH",
						input:<B_RGB_GRID/>
					})
				}) as a.t_func}
			/>
			<B_STR
				title="Delete Color"
				func={(()=>{alert("Nujabes")}) as a.t_func}
			/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_CX
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={<MULTI_SELECT_BS
						state_input={{
							ss:SS_SelectColor,
							setss:setSS_SelectColor
						}}
						jsx_select_array={SS_ColorArray.ss.map((item, index:number)=>{
							return <>{item}</>
						})}
				is_horizontal={false}
						/>}
			/>
	</>
}

/*
Color the SS_SelectColor
*/
