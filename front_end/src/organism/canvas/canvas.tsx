import { useContext, useEffect, useReducer, useState } from "react";
import { is_arr_has } from "../../atom/arr/utils";
import act_canvas from "../../atom/canvas/main";
import { init_canvas } from "../../atom/canvas/utils/utils";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import * as a from "../../atom/type/alias";
import { t_act_canvas_draw } from "../../atom/canvas/draw/type";
import { useClickPushArr } from "../../molecule/hook/useClickArr";
import { t_rgb_palettes } from "../../atom/arr/type";

export default function CANVAS()
{
	const SS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.SS_NewRGB
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(32, 32))
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const [SS_PushRGB, setSS_PushRGB] = useState<undefined|t_rgb_palettes>(undefined)
	const [SS_CanvasDraw, setSS_CanvasDraw] = useState<undefined|t_act_canvas_draw>(undefined)
	useClickPushArr({
		ss:SS_PushRGB,
		setss:setSS_PushRGB
	} as a.t_use_state<undefined|t_rgb_palettes>, setSS_RGBArr)
	useEffect(()=>{
		if (SS_CanvasDraw !== undefined)
		{
			setSS_Canvas(SS_CanvasDraw)
			setSS_CanvasDraw(undefined)
		}
	}, [SS_CanvasDraw])
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
				{SS_Canvas.map((row, i:number)=>{
					return <div key={i}>
						{row.map((grid, j:number)=>{
							return <div 
							key={j}
							style={{
							backgroundColor:grid.rgb?grid.rgb:"#FFFFFF",
							// visibility:grid.rgb?"visible":"hidden",
							width: "25px",
							height:"25px"}}
onClick={()=>{
	if (SS_PushRGB === undefined
		&& is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
		setSS_PushRGB({id:0, select:false, rgb:SS_NewRGB})
	else
		setSS_PushRGB(undefined)
	if (SS_CanvasDraw === undefined)
		setSS_CanvasDraw({
			type:"DRAW_PEN",
			rgb:SS_NewRGB,
			size:1,
			grid:[i,j]
		})
	else
		setSS_CanvasDraw(undefined)
}}>
							</div>
						})}
					</div>
				})}
			</>}
		/>
	</div>
}

/*

My old computer have RAM equal to or more than 16 GB 
but unable to run this because there are a lot of 
t_canvas_grid elements.

ChatGPT recommend me to learn about
1.	Immutability and State Updates 
–	Learn how to update state correctly without mutating it.
2.	useMemo & useCallback 
–	To optimize performance by memoizing expensive calculations and functions.
3.	React Reconciliation 
–	Understanding how React compares old and new states for efficient re-rendering.
4.	Virtualization 
–	Learn how to render large grids efficiently (using react-window or similar).
5.	React Profiling 
–	Learn how to identify performance bottlenecks in your app.
6.	Testing 
–	Ensure the correctness and reliability of your code.

*/
