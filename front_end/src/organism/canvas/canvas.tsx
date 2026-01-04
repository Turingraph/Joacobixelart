import { useContext, useEffect, useReducer, useState } from "react";
import { is_arr_has } from "../../atom/arr/utils";
import act_canvas from "../../atom/canvas/main";
import { init_canvas } from "../../atom/canvas/utils/utils";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import * as a from "../../atom/type/alias";

export default function CANVAS()
{
	const SS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.SS_NewRGB
	const [SS_Canvas, setSS_Canvas] = useReducer(act_canvas, init_canvas(32, 32))
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const [SS_PushRGB, setSS_PushRGB] = useState<undefined|string>(undefined)
	useEffect(()=>{
		if (SS_PushRGB !== undefined)
		{
			setSS_RGBArr({
				type:"PUSH",
				input:{id:0, select:false, rgb:SS_PushRGB}
			})
			setSS_PushRGB(undefined)
		}
	}, [SS_PushRGB, setSS_RGBArr])
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
		setSS_PushRGB(SS_NewRGB)
	else
		setSS_PushRGB(undefined)
}}>
							</div>
						})}
					</div>
				})}
			</>}
		/>
	</div>
}