import { JSX } from "react";
import * as a from "../../atom/type/alias";
import SELECT_TAPS from "./select_taps";

export default function SELECT_ONE_TAP({
	class_name = "middle_taps_x",
	jsx_select_array,
	use_select_item = undefined,
}:{
	class_name?:"left_table_taps"|"middle_taps_x"|"middle_taps_y"|"left_taps"
	jsx_select_array:JSX.Element[],
	use_select_item?:a.t_use_state<number>|undefined
}){
	return <SELECT_TAPS
		class_name={class_name}
		jsx_select_array={jsx_select_array}
		f_click_select={((index:number)=>{use_select_item?.setss(index)}) as a.t_func_x<number>}
		f_highlight={((index:number)=>{return index === use_select_item?.ss}) as a.t_func_xy<number,boolean>}
	/>
}