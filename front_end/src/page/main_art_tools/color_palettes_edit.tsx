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
	const SS_ColorArray = useContext(CONTEXT_SS_MAIN_ART_TOOL).color_array.SS_ColorArray;
	return <>
		<SELECT_MULTI_ITEMS
			state_input={{
				ss:SS_SelectMultiColors,
				setss:setSS_SelectMultiColors
			}}
			jsx_select_array={SS_ColorArray.ss.map((item, index:number)=>{
				return <><B_RGB_GRID mode={true} title={item[0].toString()}/></>
			})}
			is_horizontal={false}
			/>
	</>
}
