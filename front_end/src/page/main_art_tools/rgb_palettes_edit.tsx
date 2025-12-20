import { useContext, useReducer } from "react";
import act_arr from "../../atom/arr/act_arr";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import SELECT_MULTI_ITEMS from "../../molecule/html/select_multi_items";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";

export function RGB_PALETTES_EDIT()
{
	const [SS_SelectMultiRGBs, setSS_SelectMultiRGBs] = useReducer(act_arr, {
		unique:true,
		ss:[] as number[]
	})
	const {SS_RGBArr, setSS_RGBArr} = useContext(CONTEXT_SS_MAIN_ART_TOOL).rgb_arr;
	return <>
		<SELECT_MULTI_ITEMS
			selected_items={{
				ss:SS_SelectMultiRGBs,
				setss:setSS_SelectMultiRGBs
			}}
			drag_items_arr={{
				ss:SS_RGBArr,
				setss:setSS_RGBArr
			}}
			jsx_select_array={SS_RGBArr.ss.map((item, index:number)=>{
				return <div key={index}><B_RGB_GRID mode={true} title={item[0].toString()}/></div>
			})}
			is_horizontal={false}
			/>
	</>
}
