import React from "react";
import B_STR from "../../molecule/button/b_str";
import * as a from "../../atom/type/alias";
// import { CONTEXT_B_RGB_GRID_MODE } from "../../molecule/hook/one_time_useContext";

export function B_RGB_GRID({
	is_x = false
}:{
	is_x?:boolean
})
{
	const f_func = () => {
	    alert("Tally Hall");
	}
	let jsx_x = <></>
	if (is_x === true)
	{
		jsx_x = <B_STR title="x" func={f_func as a.t_func}/>
	}
	return <div style={{
		margin:"0px",
		padding:"0px",
		width:"45px", 
		height:"45px", 
	}}>
		{jsx_x}
	</div>
}