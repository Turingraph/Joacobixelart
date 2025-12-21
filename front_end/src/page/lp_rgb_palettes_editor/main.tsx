import { useContext } from "react";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_MULTI_ITEMS from "../../molecule/html/select_multi_items";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";
import STR_HEADER from "../../atom/str/str_header";

export function LP_RGB_PALETTES_EDITOR()
{
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	return <>
	<STR_HEADER title={"RGB Palettes"}/>
	<GRID_COLUMN_CX
		gap={"5px" as a.t_css}
		column={"45px 45px 45px 45px" as a.t_css}
		jsx_array={	<SELECT_MULTI_ITEMS
			arr={{
				ss:SS_RGBArr,
				setss:setSS_RGBArr
			}}
			jsx_select_array={SS_RGBArr.ss.map((item, index:number)=>{
				return <div key={index}>
					<B_RGB_GRID 
						mode={true} 
						title={item.rgb[0].toString()}
					/>
				</div>
			})}
			is_horizontal={false}
			/>}/>
	</>
}
