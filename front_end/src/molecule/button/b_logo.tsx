import { useState } from "react";
import * as a from "../../atom/type/alias";
import style from "./b_logo.module.css";
import STR_HOVER from "../../atom/str/str_hover";

export type t_B_LOGO = {
	title?:a.t_str_hover|undefined,
	logo:a.t_logo,
	func:a.t_func,
	size?:45|20
}

export default function B_LOGO_CSS(
{
	title = undefined,
	logo,
	func,
	size = 45
}:t_B_LOGO
)
{
	const [SS_OnMouseEnter, setSS_OnMouseEnter] = useState<boolean>(true);
	let description = <></>
	if (title !== undefined)
	{
		description=<STR_HOVER str_hover={title as string} is_hover={SS_OnMouseEnter}/>
	}
	return <>
		<button onClick={func} className={"tap"}
		style={{
			width:size.toString()+"px",
			height:size.toString()+"px",
		}}
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

/*
Reference
*	https://stackoverflow.com/questions/39999367/
	how-do-i-reference-a-local-image-in-react
*/