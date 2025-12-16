import { CSSProperties, JSX, useContext } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";
import { CSS_MARGIN_Y } from "./main_css";
import "./multi_color_bs.css";
import { t_use_arr } from "../../atom/arr/act_arr";
import { item_to_index } from "../../atom/arr/function";

// https://stackoverflow.com/questions/54706748/
// change-color-of-a-element-inside-a-div-using-inline-css

/*
You can use `inherit` for color property, 
which means that color property value will be 
inherited from it's parent
*/

export default function SELECT_MULTI_ITEMS({
	jsx_select_array,
	jsx_other_array = [],
	state_input,
	is_horizontal = true
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	state_input:t_use_arr<number>
	is_horizontal?:boolean
})
{
	const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	let display_flex:CSSProperties = {
			display:"flex", 
			justifyContent:"space-evenly",
	}
	if (is_horizontal === false)
	{
		display_flex = {}
	}
	return <div style={{
		...CSS_MARGIN_Y,
		...CX_CSS,
		...display_flex,
		}}>
		{jsx_select_array.map((item, index:number)=>{
			return <span
			className={state_input.ss.ss.includes(index) === true ? "select_button" : "non_select_button"}
			style={{
				border:state_input.ss.ss.includes(index) === true ? "2px solid blueviolet" : "2px solid gray",
			}}
			onClick={()=>{
				if (state_input.ss.ss.includes(index) === true)
				{
					state_input.setss({type:"DELETE", index:item_to_index(state_input.ss.ss, index)})
				}
				else
				{
					state_input.setss({type:"PUSH", input:index})
				}
			}}>
				{item}
			</span>
		})}
		{jsx_other_array.map((item, index:number)=>{return <span>{item}</span>})}
	</div>
}
