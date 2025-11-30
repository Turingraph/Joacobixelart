import { useState } from "react";
import { STR_HOVER } from "../str/str_hover";
import * as a from "../type/alias";
import "./b_logo.css";

export type t_B_LOGO = {
	str_hover:a.t_str_hover,
	logo:a.t_logo,
	f_onclick:a.t_func
}

export default function B_LOGO(
{
	str_hover,
	logo,
	f_onclick: func
}:t_B_LOGO
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	return <div>
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
		<STR_HOVER str_hover={str_hover} is_hover={SS_OnMouseEnter}/>
	</div>
}

/*
Reference
*	https://stackoverflow.com/questions/39999367/
	how-do-i-reference-a-local-image-in-react
*/