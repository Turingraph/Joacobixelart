import { useContext, useState } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import B_STR from "../../molecule/button/b_str";
import { CONTEXT_SS_GLOBAL_STUDIO, CONTEXT_SS_LP_PAINT } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_ONE_ITEM from "../../molecule/html/select_one_item";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";

export function RGB_PALETTES()
{
	const [SS_Test, setSS_Test] = useState<number>(0)
	const {SS_SelectRGB: SS_SelectColor, setSS_SelectRGB: setSS_SelectColor} = useContext(CONTEXT_SS_LP_PAINT).select_rgb;
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	return <>
			<STR_HEADER title={"RGB Palettes"}/>
			<hr style={{visibility:"hidden", height:"3px", margin:"0px"}}/>
			<B_STR
				title="Add Color"
				func={(()=>{
					setSS_RGBArr({
						type:"PUSH",
						input:{
							rgb:[SS_Test,1,2],
							select:false
						}
					})
					setSS_Test(SS_Test + 1)
				}) as a.t_func}
			/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_CX
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={	<SELECT_ONE_ITEM
					state_input={{
						ss:SS_SelectColor,
						setss:setSS_SelectColor
					}}
					jsx_select_array={SS_RGBArr.ss.map((item, index:number)=>{
						return <div key={index}><B_RGB_GRID mode={false} title={item.rgb[0].toString()}/></div>
					})}
					is_horizontal={false}
					/>}
			/>
	</>
}

/*
Color the SS_SelectColor
*/
