import * as a from "../../atom/type/alias"
import { useContext, useReducer } from "react";
import act_arr from "../../atom/arr/act_arr";
import { push_arr } from "../../atom/arr/function";
import { GRID_COLUMN_DIV } from "../../molecule/html/grid_column_div";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";

export type t_grid = {
	id:number,
	rgb:string
}

function init_ss_grid()
{
	let i = 0
	let output = [] as t_grid[]
	while (i < 32)
	{
		output = push_arr(output, {
			id:0,
			rgb:"#000000"
		})
		i += 1
	}
	return output
}

export default function CANVAS()
{
	const SS_NewHexRGB = useContext(CONTEXT_SS_GLOBAL_STUDIO).new_hex_rgb.SS_NewHexRGB
	const [SS_Grid, setSS_Grid] = useReducer(act_arr, init_ss_grid())
	return <div
	style={{
		width:"800px",
		height:"800px",
		backgroundColor:"gray",
	}}
	>
		<GRID_COLUMN_DIV
			gap={"5px" as a.t_css}
			column={"45px 45px 45px 45px 45px 45px 45px 45px" as a.t_css}
			jsx_array={<>{SS_Grid.map((item, index:number)=>{
				return <div 
					key={index}
					style={{
						backgroundColor:item.rgb,
						width: "45px",
						height:"45px"}}
					onClick={()=>{
						setSS_Grid({
							type:"EDIT",
							id:item.id,
							input:{
								id:item.id,
								rgb:SS_NewHexRGB
							}
						})
					}}
					></div>
			})}</>}/>
	</div>
}
