import { useContext, useRef } from "react";
import * as a from "../../atom/type/alias";
import { CONTEXT_SS_GLOBAL_STUDIO } from "../../molecule/hook/one_time_useContext";
import { GRID_COLUMN_CX } from "../../molecule/html/grid_column_cx";
import SELECT_MULTI_ITEMS from "../../molecule/html/select_multi_items";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";
import STR_HEADER from "../../atom/str/str_header";
import useClickDeleteArr from "../../molecule/hook/useClickDeleteArr";

export function LP_RGB_PALETTES_EDITOR()
{
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_GLOBAL_STUDIO).rgb_arr
	const Ref_DeleteId = useRef<number|undefined>(undefined)
	useClickDeleteArr(Ref_DeleteId, setSS_RGBArr)
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
			jsx_select_array={SS_RGBArr.map((item, index:number)=>{
				return <div key={index}>
					<B_RGB_GRID 
						mode={true} 
						title={item.rgb[0].toString()}
						f_delete={
							(()=>{
							if (Ref_DeleteId.current === undefined)
							{
								Ref_DeleteId.current = item.id
							}
						}) as a.t_func
						}
					/>
				</div>
			})}
			is_horizontal={false}
			/>}/>
	</>
}
