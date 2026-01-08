import { useState } from "react";
import * as a from "../../atom/type/alias";
import style from "./b_logo.module.css";
import STR_HOVER_CSS from "../str/str_hover";

export type t_B_LOGO = {
	title?:a.t_str_hover|undefined,
	logo:a.t_logo,
	func:a.t_func
}

export default function B_LOGO_CSS(
{
	title = undefined,
	logo,
	func,
}:t_B_LOGO
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	let description = <></>
	if (title !== undefined)
	{
		description=<STR_HOVER_CSS str_hover={title as string} is_hover={SS_OnMouseEnter}/>
	}
	return <>
		<button onClick={func} className={`${style.button}`}
		onMouseEnter={()=>{
			setSS_OnMouseEnter(false);
		}}
		onMouseLeave={()=>{
			setSS_OnMouseEnter(true);
		}}
		>
			<img src={logo} alt="" className={`${style.img}`}/>
		</button>
		{description}
	</>
}
