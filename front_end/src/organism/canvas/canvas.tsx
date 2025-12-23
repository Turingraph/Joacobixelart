import { useContext, useReducer, useRef } from "react";
import act_arr from "../../atom/arr/act_arr";
import { edit, push_arr } from "../../atom/arr/function";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import { t_2d_arr, t_rgb_grid } from "../../atom/arr/type";
import { useClickPushArr } from "../../molecule/hook/useClickArr";
import { is_arr_has } from "../../atom/arr/utils";

export type t_grid = {
	id:number,
	rgb:string|undefined
}

function init_ss_grid()
{
	let i = 0
	let output = [] as t_2d_arr<t_grid>[]
	while (i < 32)
	{
		let sub_output = [] as t_grid[]
		let j = 0
		while (j < 32)
		{
			sub_output = push_arr(sub_output, {
				id:0,
				rgb:undefined
			})
			j += 1
		}
		output = push_arr(output, {
			id:0,
			arr:sub_output
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
			column={"25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px" as a.t_css}
			jsx_array={<>{SS_Grid.map((row, index:number)=>{
				return <div key={index}>
				{row.arr.map((grid, jndex:number)=>{return <div 
					key={jndex}
					style={{
						backgroundColor:grid.rgb?grid.rgb:"inherit",
						width: "25px",
						height:"25px"}}
					onClick={()=>{
						let updated_row = SS_Grid.filter((item)=>item.id === row.id)[0]
						updated_row.arr = edit(updated_row.arr, grid.id, {
							id:0,
							rgb:SS_NewRGB
						})
						setSS_Grid({
							type:"EDIT",
							id:row.id,
							input:updated_row
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
					>
					</div>})}
					</div>
			})}</>}/>
	</div>
}
