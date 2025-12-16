import { useState } from "react";
import * as a from "../../atom/type/alias";
import { STR_HOVER } from "../../atom/str/str_hover";

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
	size = 45
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
		<button onClick={func} 
		style={{
			width: String(size) + "px",
			height:String(size) + "px",
		}}
		onMouseEnter={()=>{
			setSS_OnMouseEnter(false);
		}}
		onMouseLeave={()=>{
			setSS_OnMouseEnter(true);
		}}
		>
			<img src={logo} alt="" style={{
				margin:"0 auto",
				display:"inline",
				width:"90%",
				height:"90%"
			}}/>
		</button>
		{description}
	</>
}

/*
Reference
*	https://stackoverflow.com/questions/39999367/
	how-do-i-reference-a-local-image-in-react
*/