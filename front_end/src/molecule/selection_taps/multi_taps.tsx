import { CSSProperties, JSX, useContext } from "react";
import { CONTEXT_CSS_SELECT_ONE_ITEM } from "../../atom/hook/useContext";

export const CSS_MARGIN_Y = {
	// marginTop:"2px",
	// marginBottom:"2px",
	margin:"2px"
}

export const SPACE_EVENLY:CSSProperties = {
	display:"flex", 
	justifyContent:"space-evenly",
}

export default function MULTI_TAPS({
	jsx_array,
	jsx_other_array = [],
}:{
	jsx_array:JSX.Element
	jsx_other_array?:JSX.Element[]
})
{
	// const CX_CSS = useContext(CONTEXT_CSS_SELECT_ONE_ITEM);
	return <div 
	className="str_taps browser"
	>
		{jsx_array}
		{jsx_other_array.map((item, index:number)=>{return <span key={index}>{item}</span>})}
	</div>
}
