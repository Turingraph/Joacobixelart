import { JSX } from "react";
import * as a from "../../atom/type/alias";
import SELECT_TAPS from "./select_taps";

export default function SELECT_ONE_TAP({
	jsx_select_array,
	jsx_other_array = [],
	use_select_item = undefined,
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	use_select_item?:a.t_use_state<number>|undefined
}){
	return <SELECT_TAPS
		jsx_select_array={jsx_select_array}
		jsx_other_array={jsx_other_array}
		f_click_select={((index:number)=>{use_select_item?.setss(index)}) as a.t_func_x<number>}
		f_highlight={((index:number)=>{return index === use_select_item?.ss}) as a.t_func_xy<number,boolean>}
	/>
}