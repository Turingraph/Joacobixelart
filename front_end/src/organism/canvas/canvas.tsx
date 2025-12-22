import { useContext, useReducer, useRef } from "react";
import act_arr from "../../atom/arr/act_arr";
import { push_arr } from "../../atom/arr/function";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import { t_rgb_grid } from "../../atom/arr/type";
import { useClickPushArr } from "../../molecule/hook/useClickArr";
import { is_arr_has } from "../../atom/arr/utils";

export type t_grid = {
	id:number,
	rgb:string|undefined
}

function init_ss_grid()
{
	let i = 0
	let output = [] as t_grid[]
	while (i < 16*16)
	{
		output = push_arr(output, {
			id:0,
			rgb:undefined
		})
		i += 1
	}
	return output
}

export default function CANVAS()
{
	const SS_NewRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_rgb.SS_NewRGB
	const Ref_NewRGB = useRef<undefined|t_rgb_grid>(undefined)
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const [SS_Grid, setSS_Grid] = useReducer(act_arr, init_ss_grid())
	useClickPushArr(Ref_NewRGB, setSS_RGBArr)
	return <div
	style={{
		width:"800px",
		height:"800px",
		backgroundColor:"white",
	}}
	>
		<GRID_COLUMN_DIV
			gap={"0px" as a.t_css}
			column={"50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px" as a.t_css}
			jsx_array={<>{SS_Grid.map((item, index:number)=>{
				return <div 
					key={index}
					style={{
						backgroundColor:item.rgb?item.rgb:"inherit",
						width: "50px",
						height:"50px"}}
					onClick={()=>{
						setSS_Grid({
							type:"EDIT",
							id:item.id,
							input:{
								id:item.id,
								rgb:SS_NewRGB
							}
						})
						if (Ref_NewRGB.current === undefined && is_arr_has(SS_RGBArr, SS_NewRGB, "rgb") === false)
						{
							Ref_NewRGB.current = {
								id:0,
								rgb:SS_NewRGB,
								select:false
							}
						}
						else
						{
							Ref_NewRGB.current = undefined
						}
					}}
					></div>
			})}</>}/>
	</div>
}
