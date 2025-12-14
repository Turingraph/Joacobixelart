import { useState } from "react";
import * as a from "../../atom/type/alias";
import { STR_HOVER } from "../../atom/str/str_hover";
import "./b_logo.css";

export type t_B_LOGO = {
	title:a.t_str_hover,
	logo:a.t_logo,
	func:a.t_func
}

export default function B_LOGO(
{
	title,
	logo,
	func
}:t_B_LOGO
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	return <>
		<button onClick={func} className="b_logo"
		onMouseEnter={()=>{
			setSS_OnMouseEnter(false);
		}}
		onMouseLeave={()=>{
			setSS_OnMouseEnter(true);
		}}
		>
			<img src={logo} alt="" className="b_logo"/>
		</button>
		<STR_HOVER str_hover={title as string} is_hover={SS_OnMouseEnter}/>
	</>
}

/*
Reference
*	https://stackoverflow.com/questions/39999367/
	how-do-i-reference-a-local-image-in-react
*/