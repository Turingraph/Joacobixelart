import { CSSProperties, JSX } from "react";

import { CSS_FLEX_COLUMN, CSS_FLEX_COLUMN_CONTAINER, CSS_FLEX_COLUMN_LAST } from "./flex_column_css";

export default function FLEX_COLUMN({
	id = "",
	class_name = "" as string,
	is_fill_app = false as boolean,
	jsx_array
}:{
	id?:string,
	class_name?:string,
	jsx_array:JSX.Element[],
	is_fill_app?:boolean,
})
{
	let last_jsx:JSX.Element = <></>;
	let other_jsx:JSX.Element[] = [];
	if (jsx_array.length > 0)
	{
		last_jsx = jsx_array[jsx_array.length - 1];
		if (jsx_array.length > 1)
			other_jsx = jsx_array.slice(0, jsx_array.length - 1);
	}
	return <div 
	id={id} 
	className={class_name}
	style={Object.assign(CSS_FLEX_COLUMN_CONTAINER, {
		minHeight:is_fill_app?"100vh":"100%",
		maxHeight:is_fill_app?"100vh":"100%",
	}) as CSSProperties}
	>
		{other_jsx.map((item, index:number)=>{
			return <div key={index} style={CSS_FLEX_COLUMN}>{item}</div>
		})}
		<div style={CSS_FLEX_COLUMN_LAST}>{last_jsx}</div>
	</div>
}