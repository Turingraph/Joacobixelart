import React from "react";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import b_x from "../../asset/b_items/b_x.png"
// import { CONTEXT_B_RGB_GRID_MODE } from "../../molecule/hook/one_time_useContext";

export function B_RGB_GRID({
	is_x = false,
	title
}:{
	is_x?:boolean
	title:string
})
{
	const f_func = () => {
	    alert("Tally Hall");
	}
	let jsx_x = <></>
	if (is_x === true)
	{
		jsx_x = <B_LOGO logo={b_x as a.t_logo} func={f_func as a.t_func} size={20}/>
	}
	return <div style={{
		margin:"0px",
		padding:"0px",
		width:"45px", 
		height:"45px", 
	}}>
		{jsx_x}
		<p style={{margin:"0px"}}>{title}</p>
	</div>
}