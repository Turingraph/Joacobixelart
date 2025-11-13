import React from "react";
import { STR_HOVER } from "../str/str_hover";
import { useState } from "react";
import * as a from "../type/alias"

export type t_B_LOGO = {
	str_hover:a.t_str_hover,
	logo:a.t_logo,
	func:a.t_func
}

export default function B_LOGO(
{
	str_hover,
	logo,
	func
}:t_B_LOGO
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	return <div 
	onMouseEnter={()=>{
		setSS_OnMouseEnter(false);
	}}
	onMouseLeave={()=>{
		setSS_OnMouseEnter(true);
	}}
	style={{backgroundColor:"red"}}
	>
		<button onClick={func}>
			<img src={logo} alt=""/>
			<STR_HOVER str_hover={str_hover} is_hover={SS_OnMouseEnter}/>
		</button>
	</div>
}

/*
Reference
*	https://stackoverflow.com/questions/39999367/
	how-do-i-reference-a-local-image-in-react
*/