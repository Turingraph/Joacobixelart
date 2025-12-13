import { CSSProperties, JSX, useContext } from "react";
import { CSS_CONTEXT } from "../../atom/hook/useContext";
import "./multi_color_b.css";
import * as a from "../../atom/type/alias";
import { CSS_MARGIN_Y } from "../../atom/html/div_css";

// https://stackoverflow.com/questions/54706748/
// change-color-of-a-element-inside-a-div-using-inline-css

/*
You can use `inherit` for color property, 
which means that color property value will be 
inherited from it's parent
*/

export default function MULTI_SELECT_BS({
	jsx_select_array,
	jsx_other_array = [],
	state_input,
	is_horizontal = true
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	state_input:a.t_use_state<number>
	is_horizontal?:boolean
})
{
	const CX_CSS = useContext(CSS_CONTEXT);
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
		...display_flex
		}}>
		{jsx_select_array.map((item, index:number)=>{
			return <span
			className={index ===  state_input.ss ? "select_button" : ""}
			style={{
				backgroundColor:state_input.ss === index ? "BlueViolet" : "gray",
			}}
			onClick={()=>{state_input.setss(index)}}>
				{item}
			</span>
		})}
		{jsx_other_array.map((item, index:number)=>{return <span>{item}</span>})}
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