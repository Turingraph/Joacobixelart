import { JSX } from "react";
import * as a from "../../atom/type/alias";

export default function TAP({
	f_on_click = (()=>{}) as a.t_func,
	select = false,
	item = <></>,
}:{
	f_on_click?:a.t_func
	select?:boolean
	item?:JSX.Element
})
{
	return <span
		style={{
		border:select ? "3px solid blueviolet" : "3px solid gray"}}
		onClick={f_on_click}>
			{item}
	</span>
}
