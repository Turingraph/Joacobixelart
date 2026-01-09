import { JSX } from "react";
import * as a from "../../atom/type/alias";
import "./multi_color_bs.css";
import MULTI_TAPS from "./multi_taps";
import TAP from "./tap";
import { t_use_arr } from "../../atom/arr/act";

// https://stackoverflow.com/questions/54706748/
// change-color-of-a-element-inside-a-div-using-inline-css

/*
You can use `inherit` for color property, 
which means that color property value will be 
inherited from it's parent
*/

export default function SELECT_TAPS({
	jsx_select_array,
	jsx_other_array = [],
	f_click_select = ((index:number)=>{}) as a.t_func_x<number>,
	f_highlight = ((index:number)=>{return false}) as a.t_func_xy<number, boolean>,
	is_horizontal = true,
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	f_click_select?:a.t_func_x<number>
	f_highlight?:a.t_func_xy<number, boolean>
	is_horizontal?:boolean
})
{
	return <MULTI_TAPS
		is_horizontal={is_horizontal}
		jsx_array={<>{jsx_select_array.map((item, index:number)=>{
			return <TAP f_on_click={(()=>{f_click_select(index)}) as a.t_func}
				select={f_highlight(index)}
				item={item}
				key={index}
				/>
		})}</>}
		jsx_other_array={jsx_other_array.map((item, index:number)=>{return <span key={index}>{item}</span>})}
	/>
}

export function SELECT_ONE_TAP({
	jsx_select_array,
	jsx_other_array = [],
	use_select_item = undefined,
	is_horizontal = true,
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	use_select_item?:a.t_use_state<number>|undefined
	is_horizontal?:boolean
}){
	return <SELECT_TAPS
		jsx_select_array={jsx_select_array}
		jsx_other_array={jsx_other_array}
		is_horizontal={is_horizontal}
		f_click_select={((index:number)=>{use_select_item?.setss(index)}) as a.t_func_x<number>}
		f_highlight={((index:number)=>{return index === use_select_item?.ss}) as a.t_func_xy<number,boolean>}
	/>
}

export function SELECT_MULTI_TAPS<
t extends {id:number, select:boolean}, 
k extends keyof t>({
	jsx_select_array,
	jsx_other_array = [],
	arr,
	is_horizontal = true,
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	arr:t_use_arr<t, k>
	is_horizontal?:boolean
}){
	return <SELECT_TAPS
		jsx_select_array={jsx_select_array}
		jsx_other_array={jsx_other_array}
		is_horizontal={is_horizontal}
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

/*
feature
1.	jsx_select_array:t_B_STR[]|t_B_LOGO[]
2.	const [SS_Selected_B, setSS_Selected_B] = useState<number>(0)

Parameter
1.	title:string
2.	select_color:string|[number,number,number]
3.	func:a.t_func

Other Parameter
1.	logo:string
2.	/

Application
1.	color
2.	editor mode
3.	editor
4.	layer
*/