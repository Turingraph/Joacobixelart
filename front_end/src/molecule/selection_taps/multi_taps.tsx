import { CSSProperties, JSX, useContext } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";

export const CSS_MARGIN_Y = {
	marginTop:"2px",
	marginBottom:"2px",
}

export default function MULTI_TAPS({
	jsx_array,
	is_horizontal = true,
	jsx_other_array = [],
}:{
	jsx_array:JSX.Element
	is_horizontal?:boolean
	jsx_other_array?:JSX.Element[]
})
{
	const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	let display_flex:CSSProperties = {
			display:"flex", 
			justifyContent:"space-evenly",
	}
	if (is_horizontal === false)
		display_flex = {}
	return <div style={{
		...CSS_MARGIN_Y,
		...CX_CSS,
		...display_flex,
	}}>
		{jsx_array}
		{jsx_other_array.map((item, index:number)=>{return <span key={index}>{item}</span>})}
	</div>
}
