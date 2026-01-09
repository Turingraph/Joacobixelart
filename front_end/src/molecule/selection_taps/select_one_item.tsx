import { CSSProperties, JSX, useContext } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";
import * as a from "../../atom/type/alias";
import "./multi_color_bs.css";

export const CSS_MARGIN_Y = {
	marginTop:"2px",
	marginBottom:"2px",
}

// https://stackoverflow.com/questions/54706748/
// change-color-of-a-element-inside-a-div-using-inline-css

/*
You can use `inherit` for color property, 
which means that color property value will be 
inherited from it's parent
*/

export default function SELECT_ONE_ITEM({
	jsx_select_array,
	jsx_other_array = [],
	state_input = undefined,
	is_horizontal = true,
	horizontal_gap = undefined
}:{
	jsx_select_array:JSX.Element[],
	jsx_other_array?:JSX.Element[],
	state_input?:a.t_use_state<number>|undefined
	is_horizontal?:boolean
	horizontal_gap?:undefined|"2px"|a.t_css
})
{
	const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	let x_gap = {}
	if (horizontal_gap)
		x_gap = {
		marginLeft:horizontal_gap,
		marginRight:horizontal_gap,
	}
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
			let item_border = "2px solid gray"
			if (state_input && state_input.ss === index)
				item_border = "2px solid blueviolet"
			return <span
			key={index}
			className={state_input && index === state_input.ss ? "select_button" : "non_select_button"}
			style={{
				...x_gap,
				...{border:item_border}
			}}
			onClick={()=>{
				if (state_input)
					state_input.setss(index)}}>
				{item}
			</span>
		})}
		{jsx_other_array.map((item, index:number)=>{return <span key={index}>{item}</span>})}
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