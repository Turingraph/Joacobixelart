import { JSX } from "react";
import * as a from "../../atom/type/alias";
import "./multi_color_bs.css";

export default function TAPS({
	f_on_click = (()=>{}) as a.t_func,
	select = false,
	item = <></>
}:{
	f_on_click?:a.t_func
	select?:boolean
	item?:JSX.Element
})
{
	return <span
		className={select ? "select_button" : "non_select_button"}
		style={{
			border:select ? "2px solid blueviolet" : "2px solid gray",
			margin:"2px"
		}}
		onClick={f_on_click}>
			{item}
	</span>
}
