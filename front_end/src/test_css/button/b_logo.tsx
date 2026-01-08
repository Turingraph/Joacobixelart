import { useState } from "react";
import * as a from "../../atom/type/alias";
import STR_HOVER from "../str/str_hover";
import "./main.css";

export type t_B_LOGO = {
	title?:a.t_str_hover|undefined,
	logo:a.t_logo,
	func:a.t_func
}

export default function B_LOGO(
{
	title = undefined,
	logo,
	func,
}:t_B_LOGO & {size?:45|number}
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	let description = <></>
	if (title !== undefined)
	{
		description=<STR_HOVER str_hover={title as string} is_hover={SS_OnMouseEnter}/>
	}
	return <>
		<button onClick={func} className="B_LOGO"
		onMouseEnter={()=>{
			setSS_OnMouseEnter(false);
		}}
		onMouseLeave={()=>{
			setSS_OnMouseEnter(true);
		}}
		>
			<img src={logo} alt="" className="B_LOGO"/>
		</button>
		{description}
	</>
}
