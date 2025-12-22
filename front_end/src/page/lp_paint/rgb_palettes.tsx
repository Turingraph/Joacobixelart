import { useContext } from "react";
import STR_HEADER from "../../atom/str/str_header";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO, CONTEXT_SS_LP_PAINT } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_ONE_ITEM from "../../molecule/html/select_one_item";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";

export function RGB_PALETTES()
{
	const {SS_SelectRGB, setSS_SelectRGB} = useContext(CONTEXT_SS_LP_PAINT).select_rgb
	const SS_RGBArr = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr.SS_RGBArr
	return <>
			<STR_HEADER title={"RGB Palettes"}/>
			<hr style={{visibility:"hidden", height:"0px", marginTop:"0px", marginBottom:"5px"}}/>
			<GRID_COLUMN_CX
				gap={"5px" as a.t_css}
				column={"45px 45px 45px 45px" as a.t_css}
				jsx_array={	<SELECT_ONE_ITEM
					state_input={{
						ss:SS_SelectRGB,
						setss:setSS_SelectRGB
					}}
					jsx_select_array={SS_RGBArr.map((item, index:number)=>{
						return <div 
							key={index}
						><B_RGB_GRID rgb={item.rgb}/></div>
					})}
					is_horizontal={false}
					/>}
			/>
	</>
}

/*
Color the SS_SelectColor
*/
