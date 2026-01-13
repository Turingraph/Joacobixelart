import { JSX, useContext } from "react";
import * as a from "../../atom/type/alias";
import TAP from "./tap";
import { CONTEXT_OTHER_JSX } from "../../atom/hook/useContext";

export default function SELECT_TAPS({
	class_name = "middle_taps_x",
	jsx_select_array,
	f_click_select = ((index:number)=>{}) as a.t_func_x<number>,
	f_highlight = ((index:number)=>{return false}) as a.t_func_xy<number, boolean>,
}:{
	class_name?:"left_table_taps"|"middle_taps_x"|"middle_taps_y"|"left_taps"
	jsx_select_array:JSX.Element[],
	f_click_select?:a.t_func_x<number>
	f_highlight?:a.t_func_xy<number, boolean>
})
{
	const CX_OtherJSX = useContext(CONTEXT_OTHER_JSX)
	const current_key = CX_OtherJSX?.front?.length ? CX_OtherJSX?.front?.length : 0
	return <div className={class_name}>
		{CX_OtherJSX?.front?.map((item, index:number)=>{
			return <span key={index} className="center_box">{item}</span>
		})}
		{jsx_select_array.map((item, i:number)=>{
			let index = current_key + i
			return <TAP 
				f_on_click={f_click_select as a.t_func_x<number>}
				select={f_highlight(i)}
				item={item}
				key={index}
				index={i}
				/>
		})}
		{CX_OtherJSX?.back?.map((item, i:number)=>{
			let index = current_key + i + jsx_select_array.length
			return <span key={index} className="center_box">{item}</span>})}
	</div>
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