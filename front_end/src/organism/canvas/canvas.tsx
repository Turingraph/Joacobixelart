import { useContext, useReducer, useState } from "react";
import { is_arr_has } from "../../atom/arr/utils";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import * as a from "../../atom/type/alias";
import { useClickPushArr } from "../../molecule/hook/useClickArr";
import { t_rgb_palettes } from "../../atom/arr/type";
import { init_canvas } from "../../atom/canvas_pen/utils/utils";
import { act_canvas } from "../../atom/canvas_pen/main";

export default function CANVAS()
{
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const [SS_PushRGB, setSS_PushRGB] = useState<undefined|t_rgb_palettes>(undefined)
	const SS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.SS_NewRGB
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(32, 32))
	useClickPushArr({
		ss:SS_PushRGB,
		setss:setSS_PushRGB
	} as a.t_use_state<undefined|t_rgb_palettes>, setSS_RGBArr)
	return <div
	style={{
		width:"800px",
		height:"800px",
		backgroundColor:"white",
	}}
	>
		<GRID_COLUMN_DIV
			gap={"0px" as a.t_css}
			column={"25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px" as a.t_css}
			jsx_array={<>
{SS_Canvas.arr.map((item, index:number)=>{
	return <div 
		key={index}
		style={{
			backgroundColor:item.rgb,
			width: "25px",
			height:"25px"}}
		onClick={()=>{
		if (SS_PushRGB === undefined
			&& is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
			setSS_PushRGB({id:0, select:false, rgb:SS_NewRGB})
		else
			setSS_PushRGB(undefined)
		setSS_Canvas({
			type:"DRAW_PEN",
			rgb:SS_NewRGB,
			size:1,
			grid:index
		})
		}}></div>
			})}</>}/>
	</div>
}

/*
Advice
*	Do not use useState and useReducer on nested array.
	If you want to update nested array using useReducer
	you have to use helper function and 1D array instead.
*	use useMemo on SS_Canvas because setSS_Canvas work 
	slower than other useState/useReducer significantly.
*	setSS_Canvas can handle diverse canvas operations without 
	becoming God object because it act as the entry point,
	but not as the interactive model.

Issue
*	Cannot update multiple t_canvas_grids on the single 
	useReducer update click.
*	Refactor canvas_outdated/ as canvas/ because canvas_outdated/
	were created with the incorrect assumption that 
	useReducer 2D nested array will works.

*/
