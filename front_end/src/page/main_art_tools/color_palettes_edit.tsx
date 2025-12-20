import { useContext, useReducer } from "react";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";
import act_arr from "../../atom/arr/act_arr";
import SELECT_MULTI_ITEMS from "../../molecule/html/select_multi_items";

export function COLOR_PALETTES_EDIT()
{
	const [SS_SelectMultiColors, setSS_SelectMultiColors] = useReducer(act_arr, {
		unique:true,
		ss:[] as number[]
	})
	const {SS_ColorArray, setSS_ColorArray} = useContext(CONTEXT_SS_MAIN_ART_TOOL).color_array;
	return <>
		<SELECT_MULTI_ITEMS
			selected_items={{
				ss:SS_SelectMultiColors,
				setss:setSS_SelectMultiColors
			}}
			drag_items_arr={{
				ss:SS_ColorArray,
				setss:setSS_ColorArray
			}}
			jsx_select_array={SS_ColorArray.ss.map((item, index:number)=>{
				return <div key={index}><B_RGB_GRID mode={true} title={item[0].toString()}/></div>
			})}
			is_horizontal={false}
			/>
	</>
}
