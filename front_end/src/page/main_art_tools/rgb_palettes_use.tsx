import { useContext } from "react";
import { CONTEXT_SS_MAIN_ART_TOOL } from "../../molecule/hook/one_time_useContext";
import SELECT_ONE_ITEM from "../../molecule/html/select_one_item";
import { B_RGB_GRID } from "../../organism/button/b_rgb_grid";

export function RGB_PALETTES_USE()
{
	const {SS_SelectRGB: SS_SelectColor, setSS_SelectRGB: setSS_SelectColor} = useContext(CONTEXT_SS_MAIN_ART_TOOL).select_rgb;
	const SS_RGBArr = useContext(CONTEXT_SS_MAIN_ART_TOOL).rgb_arr.SS_RGBArr;
	return <>
		<SELECT_ONE_ITEM
			state_input={{
				ss:SS_SelectColor,
				setss:setSS_SelectColor
			}}
			jsx_select_array={SS_RGBArr.ss.map((item, index:number)=>{
				return <div key={index}><B_RGB_GRID mode={false} title={item[0].toString()}/></div>
			})}
			is_horizontal={false}
			/>
	</>
}
