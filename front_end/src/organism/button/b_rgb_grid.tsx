import React from "react";
import * as a from "../../atom/type/alias";
import B_LOGO from "../../molecule/button/b_logo";
import b_x from "../../asset/b_items/b_x.png"

export function B_RGB_GRID({
	mode = false,
	title,
}:{
	mode?:boolean
	title:string
})
{
	const f_func = () => {
	    alert("Tally Hall");
	}
	let jsx_x = <></>
	if (mode === true)
	{
		jsx_x = <B_LOGO logo={b_x as a.t_logo} func={f_func as a.t_func} size={20}/>
	}
	return <div style={{
		margin:"0px",
		padding:"0px",
		width:"45px", 
		height:"45px", 
	}}
	>
		<div style={{
			margin:"0px", 
			padding:"0px",
			width:"100%",
			height:"100%"
		}}
		>
		{jsx_x}
		<p style={{margin:"0px"}}>{title}</p>
		</div>
	</div>
}
