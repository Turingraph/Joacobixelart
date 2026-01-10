import { JSX } from "react"
import { t_use_arr } from "../../atom/arr/act"
import SELECT_TAPS from "./select_taps"
import * as a from "../../atom/type/alias";

export function SELECT_MULTI_TAPS<
t extends {id:number, select:boolean}, 
k extends keyof t>({
	class_name = "middle_taps_x",
	jsx_select_array,
	arr,
}:{
	class_name?:"left_table_taps"|"middle_taps_x"|"middle_taps_y"
	jsx_select_array:JSX.Element[],
	arr:t_use_arr<t, k>
}){
	return <SELECT_TAPS
		class_name={class_name}
		jsx_select_array={jsx_select_array}
		f_click_select={((index:number)=>{arr.setss({
					type:"EDIT", 
					id:arr.ss[index].id,
					input:{
						...arr.ss[index],
						select:arr.ss[index].select === true ? false : true
					}
				})}) as a.t_func_x<number>}
		f_highlight={((index:number)=>{return arr.ss[index].select}) as a.t_func_xy<number,boolean>}
	/>
}